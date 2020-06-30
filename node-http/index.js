const http = require('http');

const hostname = 'localhost';

const port= 3000;
// rqq incoming http req
//
const server = http.createServer((req, res)=>{
    console.log(req.headers);

    res.statusCode = 200 ; // for response messege  ok
    res.setHeader ('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello server</h1></body></html>')
})

server.listen(port, hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);
} )