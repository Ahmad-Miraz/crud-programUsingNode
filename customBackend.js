const http=require('http');
const fs=require('fs');


const home=fs.readFileSync("js/index.html");
const about=fs.readFileSync("js/about.html");
const services=fs.readFileSync("js/services.html");
const contact=fs.readFileSync("js/contact.html");

const hostname='127.0.0.1';
const port=8000;

const server=http.createServer((req,res)=>{

    console.log(req.url);
    url=req.url;

    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/about'){

        res.end(about);
    }
    else if(url == '/services'){
        res.end(services);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else{
        res.statusCode=404;
        res.end("<h1>404 Not Found!</h1>")
    }
});

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});