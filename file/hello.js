// const http = require('http');
// const hostname = 'localhost';
// const port = 3000;
// const server = http.createServer((req, res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     // res.end('{"message": "Hello World"}');
//     // res.end("<h1>Hello World</h1> <p>This is group 2</p>")
//     switch(req.url){
//         case "/home":
//             res.writeHead(200);
//             res.end("<h1>This is homepage</h1>");
//             break;
//         case "/about":
//             res.writeHead(200);
//             res.end("<h1>This is about page</h1>");
//             break;
//         default:
//             break;
//     }
// });

// server.listen(port, hostname, ()=>{
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT);

console.log('Web Server is listening at port '+ PORT);