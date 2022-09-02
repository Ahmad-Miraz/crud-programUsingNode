const express=require("express");
const fs=require("fs");
const path=require("path");
const app=express();
const hostname="127.0.0.1"
const port=80;

//For serving static files
app.use('/static',express.static('static'));
app.use(express.urlencoded({ extended: true }));


//set the template enging as pug
app.set('view engine', 'pug')

//set the views directory
app.set('views',path.join(__dirname,'views'));

//endPoint
app.get("/",(req,res)=>{
    const con="this is an gym app using nodeJs";
    const titles={'title':'Gymnistics',"content":con};
    res.status(200).render("index.pug",titles);
});

app.post('/',(req,res)=>{
    name=req.body.name
    age=req.age
    email=req.body.email
    gender=req.body.gender
    address=req.body.address
    more=req.body.more
    let outPutToWrite=`the name of the client is ${name},${age} years old, ${gender} for contact ${email}, residing at ${address},More about ${name} : ${more}`
    fs.writeFileSync('output.txt',outPutToWrite)
    console.log(req.body)
    const titles={'message':"Your form has been submitted succesfully"};
    res.status(200).render('index.pug',titles);
});

//listening to server
app.listen(port,hostname,()=>{
    console.log(`this application started successfully on port ${hostname}:${80}`);
});
// //Our pug demo endpoint
// app.get("/demo",(req,res)=>{
//     res.status(200).render("demo",{title:'hey miraj',message:'hello there'});
    
// });

// app.get("/",(req,res)=>{
//     res.send("this is my first express app and home page");
// });

// app.get("/about",(req,res)=>{
//     res.send("this is about page");
// });

// app.get("/services",(req,res)=>{
//     res.send("this is services page");
// });

// app.get("/contact",(req,res)=>{
//     res.send("this is contact page with get method");
// });

// app.post("/contact",(req,res)=>{
//     res.send("this is contact pAge with post method");
// });

// app.post("/error",(req,res)=>{
//     res.status(404).send("This page is not found");
// });
