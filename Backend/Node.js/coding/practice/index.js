// const express= require("express"); 
// require("dotenv").config();
// const app = express();

// app.use(express.json()) // parse requests into json format 


// const userRouter = require("./user");
// app.use("/user", userRouter);

// app.get("/", (req, res) => {
//    res.send("this is home page");
// });


// // using the app.get we can import the route
// // app.get('/user/:userId',(req,res)=>{
// //    const userId= req.params.userId;
// //    res.send(userId);
// // })

// // const middleware =(req, res, next)=>{
// //    console.log("this is the middleware check");
// // }
// // app.use(middleware)  this will check middleware for every request  not need to mnuallry added it 

// // app.get('/',middleware,(req, res)=>{
// //     res.send('API is running 🚀');
// // });


// const PORT=process.env.PORT ||3000; 
// app.listen(PORT,()=>{
//    console.log(`server is running at ${PORT}`);
// })





const express = require('express'); 
require("dotenv").config();
const app= express(); 
app.use(express.json());

const store=[];

app.post('/content', (req, res)=>{
    const newcontent= req.body.content;
    if(!newcontent){
      return res.status(400).json({error:"Add valide content"});
    }

    store.push(newcontent);
    res.status(201).json({ message: 'Content added successfully' ,data: store });
  
})
const PORT=process.env.PORT || 3000;
app.listen(PORT , ()=>{
   console.log(`listen to port ${3000}`);
})