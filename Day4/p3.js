const http = require('http');

const users=[]

const server = http.createServer(async (req, res) => {
    res.writeHead(200, { 'content-type': 'application/json' });
    if (req.url === '/getdata' && req.method === 'GET') {
        
        res.end(JSON.stringify(users));
        return;
    }
    else if (req.url === '/setdata' && req.method === 'POST') {
        let body = ''
        req.on('data', chunk => {
            body += chunk
        })
        req.on('end',()=>{
            const data=JSON.parse(body);
            console.log("recieved data:",data);
            users.push(data);
            res.end(JSON.stringify({message:"Data recieved successfully "}))
        })

    }
    // res.end('hello world')
});


server.listen(9000, (err) => {
    if (err) throw err;
    console.log("server is running at http://localhost:9000");

});