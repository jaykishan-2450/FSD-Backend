const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    //can also use res.setHeader('Content-Type','text/plain') to send normal texts;
    res.write('<h1 style="background-color:red;color:white">Hello World</h1>');
    res.end('end of response');
})

server.listen(9000,(err)=>{
    if(err) console.log('Error in server setup');
    else console.log('Server is running on port 9000');

})