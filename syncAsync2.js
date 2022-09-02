// synchronous file..it will execute file in line by line, blocking type
const fs=require("fs");
let text=fs.readFileSync("file.txt","utf-8");
console.log(text);

//Asynchronous file .. it will not execute file in line by line everytime. non-blocking type
fs.readFile("file.txt","utf-8",(err,data)=>{
    console.log(err,data);
});
console.log("it will execute before the file bcoz during the file reading time asynchronous function will work for other properties. here null is the error parameter and parameter data is the read file");