const http=require('http');
const fs=require('fs');
const fileContent=fs.readFileSync("js/index.html");

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(fileContent);
});
const port=8000;
const hostname="127.0.0.1";
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`);
});