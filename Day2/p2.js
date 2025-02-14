const http=require('http');
const fs=require('fs/promises');
const path=require('path');



const server=http.createServer(async (req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    const data =await fs.readFile("./index.html",(err,data)=>{
        if(err) console.log(err);
        console.log(data);

    });
    res.end(data);
    
})

server.listen(9000,(err)=>{
    if(err) console.log('Error in server setup');
    else console.log('Server is running on port 9000');

})