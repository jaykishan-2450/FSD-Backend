const http = require('http');

const server = http.createServer(async (req, res) => {
    res.writeHead(200, { 'content-type': 'application/json' });
    if (req.url === '/getdata' && req.method === 'GET') {
        const data = { name: "John Doe", age: 30 };
        res.end(JSON.stringify(data));
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
            res.end(JSON.stringify({message:"Data recieved successfully ",yeleapnadata:data}))
        })

    }
    // res.end('hello world')
});


server.listen(9000, (err) => {
    if (err) throw err;
    console.log("server is running at http://localhost:9000");

});