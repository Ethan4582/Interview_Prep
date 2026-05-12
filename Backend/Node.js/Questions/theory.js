

{
  Basic: [
    {
      id: 1,
      question: "What is Node.js and how does it work?",
      answer: "Node.js is a JavaScript runtime built on the V8 engine not a language. It allows you to run JavaScript on the server Like we have JVM for Spring. We can run our .js file directly in node environment. We do not need any additional setup ."
    },
    {
      id: 2,
      question: "How Node is a runtime environment on server side? What is V8?",
      answer: "Browser excute code in client side (Browser has APIs to run JS code) while Node excute code in server (Node have APIs like File System, HTTP, etc.). Both Browser and Node have V8 engine but Node have additional features like event loop, APIs etc. V8 is a JavaScript engine which is written in C++. It compiles and runs JavaScript code ."
    },
    {
      id: 3,
      question: "What is the difference between Runtime environment & Framework?",
      answer: "Runtime environment is a software that provides an environment for a program to run like memory mangement and I/O operations. Framework is a collection of libraries and tools that helps you to build a web application and it is built on top of runtime environment. Like React is a framework built on top of browser runtime environment. Express is a framework built on top of node runtime environment. In short Runtime environment provides features while framework provides features to build an application."
    },{
      id:4,
      question:"What is the difference between Node.js & Express.js??",
      answer:"NodeJS is runtime environment while Express.js is a framework.Express.js is built on top of NodeJS. Node.js provides features like file system, http, etc. while Express.js provides features like routing, middleware, etc."
    },{
      id:5,
      question:"What are the differences between Client-Side(Browser) & Server-Side(Node.js)?",
      answer:"Server-Side handles the bussiness logic like database, Authentication, API, etc. While client side handles the UI it has feature like DOM Manipulation, Event Handling, etc. "
    },{
      id:6,
      question:"What are the 7 Main Features of Node.js?",
      answer:"1. Fast 2. Asynchronous and non-blocking nature 3. Single Threaded 4. Event Driven 5. Cross-Platform 6. NPM 7. Real-Time Applications"
    },{
      id:7,
      question:"What is Asynchronous Programming?",
      answer:"A task will not wait for another task to complete. It will just move to the next task and will come back to the previous task once it is completed. This is called non-blocking nature of node.js and event will tell the thread the task is completed and excute it first. "
    },{
      id:8,
      question:"What are Events Event Emitter, Event Queue, Event Loop & Event Driven?",
      answer:"Node.js follows event driven architecture. It have Event Emitter to emit events, Event Queue to queue events, Event Loop to loop through events and Event Driven to drive events. Event Driven architecture is nothing but a way to handle events. "
    },{
      id:9,
      question:"Disadvantgae for Node.js",
      answer:"1. Single Threaded, 2. Callbacks 3.CPU Intensive Tasks, 4. Heavy Computation like gaming or Image Processing "
    },{
      id:10,
      question:"What are Modules in Node? What is the difference between a function & module",
      answer:"Modules in node are nothing but a way to organize our code in a way that we can reuse it. It is a way to break down our code into smaller manageable chunks. Function returns a value (one) while module can export multiple values/functions/classes etc.A module is a broader concept that encapsulates functionality, while a function is a specific set of instructions within that module. "
    },
    ,{
      id:11,
      question:"How many ways are there to Export a module?",
      answer:"1. default export 2.named export 3.direct export",
     image:"/assets/theory/11.png"
    },
    ,{
      id:12,
      question:"What are the Types of modules in Node",
      answer:"fs,hhtp are built in module , local module means created by us and third party module are installed from npm",
     
    },
    ,{
      id:13,
      question:"hat is the difference between a function and an event?",
      answer:"A function is a block of code that performs a specific task. An event is a signal that indicates that something has happened."
    },
    ,{
      id:14,
      question:"What are the advantages of using Express.js with Node.js?",
      answer:"1. Routing (Easy to define routes and endpoints)  2.Middleware (Chainable functions that can process requests and responses)  3.Template Engines (Integration with template engines like EJS, Pug, etc.)  4.Error Handling (Efficient error handling middleware)  5.Security (Built-in security features like helmet, rate limiting, etc.)  6.Performance (Lightweight and fast framework)  7.Community (Large and active community with extensive support and resources)"
    },{
      id:15,
      question:"How to create an HTTP Sever using Express.js?",
      image:"/assets/theory/15.png",
    },{
      id:16,
      question:"What is Middleware in Express.js and when to use them?",
      answer:"Middleware is a function that stands in between request and response and can perform validation, modification, etc. We use them when we need to perform some action before or after the request is processed."
    },{
      id:17,
      question:"What are the types of Middleware?",
      answer:"1. Application-level middleware (app.use())  2.Router-level middleware (router.use())  3.Error-handling middleware (err, req, res, next)  4.Built-in middleware (express.json(), express.urlencoded())  5.Third-party middleware (body-parser, cors, helmet, etc.)"
    },{
      id:18,
      question:"How do you implement middleware in Express.js?",
      answer:"",
      image:"/assets/theory/18.png",
    },{
      id:19,
      question:"What is Request Pipeline in Express?",
      image:"/assets/theory/19.png",
    },{
      id:20,
      question:"What are third-party middleware's? Give some examples?",
      answer:"Third-party middleware is a middleware that is not built by us but installed from npm. Some examples are body-parser, cors, helmet, etc.",
      image:"/assets/theory/20.png",
    },{
      id:21,
      question:"What is error handling middleware?",
      answer:"Error handling middleware is a middleware that is used to handle errors in our application. It is a function that takes four arguments req, res, err, next. And we add then at the end if we have multiple middlewares so if the error occure in any middleware it will skip all the remaining middleware and go to the error handling middleware.",
      code:`
      app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
      });
      `
    },{
      id:22,
      question:"What are the advantages of using middleware in Express.js?",
      answer:"1.Modularity (Divide application into smaller, manageable pieces) 2.Flexibility (Add or remove middleware as needed) 3.Performance (Lightweight and efficient) 4.Security (Implement security measures like authentication and authorization) 5.Error Handling (Handle errors gracefully) 6.Maintainability (Easy to maintain and debug) 7.Code Reusability (Use middleware in multiple applications) 8.Scalability (Easy to scale the application)"
    },{
      id:23,
      question:"What is the difference between middleware & routing in Express",
      image:"/assets/theory/23.png",
    },{
      id:24,
      question:"How to handle Routing in Express.js real applications",
      image:"/assets/theory/24.png"
    },{
      id:25,
      question:"What are Route Parameters in Express.js?",
      image:"/assets/theory/25.png",
    },{
      id:26,
      question:"What is the difference between app.get() and router.get() method?",
      image:"/assets/theory/26.png",
    }
  ];
  Medium: [
    {
      id:1,
      question:"How does routing work in real production ",
      image:"/assets/theory/27.png",
      image2:"/assets/theory/28.png",
    },
    ,{
      id:2,
      question:"What are the advantages of RESTAPI",
      answer:"1.Stateless(Server doesn't store information about the client) 2.Scalable 3.Flexible 4.Cached (Can store responses for better performance) 5.Separation of Concerns 6.Easy to integrate with other services 7. Layered Architecture (Can add layers between client and server for security, caching, etc.) 8. Cacheable"
    },
    ,{
      id:3,
      question:"What is the difference between REST and SOAP",
      answer:"REST is architectural style while SOAP is protocol, REST uses HTTP protocol while SOAP can use any protocol, REST is lightweight while SOAP is heavy, REST is stateless while SOAP is stateful, REST is cached while SOAP is not cached",
      image:"/assets/theory/29.png",
    }
    ,{
      id:4,
      question:"What are get, post , delete ,put methods?",
      answer:"get - used to fetch data  , post - used to create data , delete - used to delete data , put - used to update data if the input does not exist then create new entry , patch - used to update the existing data if the input does not exist then do nothing ",
    },{
      id:5,
      question:"Explain the concept of Idempotence in RESTful APIs?",
      answer:""
    }
  ];
  Hard: [
    {
      id:1,
      question:"How can you secure the server and application?",
      answer:"1. Use HTTPS (Encrypts data in transit)  2.Implement Rate Limiting (Prevent abuse)  3.Input Validation (Prevent malicious input)  4.Authentication & Authorization (Verify user identity)  5.Set Security Headers (Helmet, CSP, etc.)  6.Secure Database Credentials (Environment variables, encryption)  7.Regular Security Audits (Penetration testing)  8.Protect Against Common Vulnerabilities (XSS, CSRF, SQL Injection)",
    },
    
  ]
}