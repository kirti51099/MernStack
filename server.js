const http=require ('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello,Node.js!');

}).listen(5000);
console.log('server running at http://localhost:5000');