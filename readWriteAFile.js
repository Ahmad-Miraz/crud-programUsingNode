const fs=require('fs');
let text=fs.readFileSync("file.txt","utf-8"); //read a file 
text=text.replace("miraz","asif"); //replacing word in file
console.log("the content of the file is: ");
console.log(text); //print the file on console

console.log("creating a new file ")
fs.writeFileSync("asif.txt",text) //creating new file

