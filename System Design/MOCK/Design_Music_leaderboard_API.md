# Music Leaderboard System Design

Given an API to track when a certain user listened to a certain song, build a system to track the **top 10 most listened to songs and albums** in the last one week / one month / one year, by user / country / globally.


## Out of Scope

- No personalization
- User Experience is out of scope


## Scale

| Parameter | Value |
|---|---|
| Unique Users | 100 Million (40% Active) |
| Average Listening Time | 2 Hours a day |
| Songs Available | 500 Million (growing at 50K per day) |


## Latency

- Not a real-time system
- The list is refreshed every hour daily (differs by highly active hours and less active hours)
- Up to 1 day for less popular regions, and configurable


## QPS (Queries Per Second)

| State | QPS |
|---|---|
| Starting | 200 QPS |
| Peak | 1,000 QPS |


## Data Calculation

```
100M users → 3 hrs a day → 3 * 60 / 5 = 36 songs per user (avg)
→ 100M * 36 / 12 = 300K events per second
→ 36 * 100M = 3.6 Billion events per day
```


## Design

### Architecture Diagram

![Music Leaderboard System Design](../../Assets/Design_Music_leaderboard_API.png)

> 📐 View interactive diagram on [Excalidraw](https://excalidraw.com/#json=lnYPNWD_AvwZr3JnFWAmF,1-jxxQ6ZlC7artKVouBElg)


### Design Process

- The tracking API tracks the data and stores it in a queue until it is processed.
- The API could also do the processing itself, but this can lead to higher latency — we can offload this functionality in the future.
- The reason to use a queue is that during peak times, we can avoid data loss or latency issues by offloading to the queue, which allows us to scale the API.
- We will add a queue to the tracking API which it will write to — we can use **Kafka**.
- We do not have any real-time requirement, so we can do **batch processing** with a maximum latency of 1 hour.
- We will have a streaming job that reads from the Kafka topic and writes to batch stores.
- We are choosing **HDFS (Data Lake)** or **AWS S3** for storing the raw data.
- We will have an **ETL pipeline** that processes the raw data and gives schema to the event.


### Quick Discussion — HDFS Partitioning

**Should we create 1 partition per hour for HDFS?**

- If we do per-hour partitioning, we will have too many small files in HDFS, which can affect bandwidth.
- Less query data is rarely accessed, so there is no need for per-hour partitioning.
- Instead, we can have a **single large file for a day**.


## Low Level Design

### Schemas

**Song Event Schema:**
```
{ Song_id, User_id, Album_id, Time_stamp, Country_code, Geo_location }
```

**Song Metadata Table Schema:**
```
{ Song_id, Song_name, Artist_name, Album_name, Album_art, Genre, Year }
```

It is expected to be available in HDFS. If this were a small record set we could fetch it in the batch processing, but since we have millions of songs we need to keep it there.

We then pass the schema to another ETL (or the same ETL) job called `Enrich_Songs_Event`, which merges it with the Song Metadata or Album Metadata using Joins. Based on necessity, we can improve the schema further (e.g., country code, city, etc.).

**Enriched Schema:**
```
Song:      Song_id, Song_name, Artist_name, Album_name, Album_art, Genre, Year
User:      User_id, Gender, Age
Location:  Country_code, Geo_location, City
Timestamp: Time_stamp, day, month, year, hour
```


### Aggregation

After enrichment, the data has to be aggregated. Options include:

- **BigQuery** — fast data warehouse, data analytics. The Top Songs and Top Albums APIs can talk directly to BigQuery.
- After BigQuery aggregation, we can put results into another data store to serve the data, like **RDBMS**.

#### 2 Ways to Transfer Data from HDFS to RDBMS

1. Use an ETL job and write the aggregation results directly to the RDBMS tables.
2. If using BigQuery for aggregation, export the results to RDBMS using a batch job.


## Reliability

### Tracking API
- Load balancers deployed in multiple regions.
- If we have Region 1 and Region 2, and we need no data loss, we can choose a 50/50 or 100/100 traffic split.

### Kafka
- Kafka is distributed, so we can have multiple brokers. If one region is down, others can continue to work, and we can have multiple copies of the data.
- Since the data is not partitioned across 2 regions, we need an aggregation layer that will read from both Kafka instances and keep it consolidated.

### HDFS
- HDFS is also distributed but is primarily used in 1 region. If we bring up another region, it will have all the data and can start running immediately.

### RDBMS
- RDBMS needs to be available in both regions — both primary and replicated — so we have a backup.


## Improvements

- Monitoring and alerting with health checks on all components.
- Separate health checks for data quality — verifying data is arriving, processing, and flowing correctly through different pipelines.

## Glossary

**Why Kafka?**
Distributed, replicated, fault tolerant, pub-sub system.

**Why HDFS?**
Good for batch processing, can store petabytes of data, distributed, replicated data, fault tolerant, cost effective, scales well for batch processing.

**Why BigQuery?**
BigQuery is a fully managed, serverless data warehouse that enables super-fast SQL queries using the power of Google's distributed infrastructure.

**What is ETL?**
Extract, Transform, Load (ETL) is a type of data integration process that involves extracting data from one or more sources, transforming it into the required format, and loading it into a destination system. ETL is good for batch processing and can be scheduled.

**What is RDBMS?**
A relational database management system (RDBMS) is software that allows you to create, manage, and query a relational database. It provides a way to store data in tables with rows and columns, and to define relationships between tables.

**What is Batch Processing?**
Batch processing is a method of processing data in batches or chunks, rather than processing each data item individually as it arrives. Data is collected over a period of time and then processed together as a single batch.

**What is OLAP?**
OLAP (Online Analytical Processing) is a type of data processing that allows users to analyze data from multiple perspectives. It is used to analyze large datasets and identify trends and patterns. OLAP is widely used in data analytics and business intelligence.