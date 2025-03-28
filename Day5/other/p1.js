const http = require('http')
const fs = require('fs/promises')

const server = http.createServer(async (req, res) => {

    res.writeHead(200, { 'content-type': 'text/html' });

    if (req.url === '/getdata' && req.method === 'GET') {
        const jsonData = await fs.readFile('data.json');



        const myHTML = `<html>
    <head>
    <title>Products</title>
    <style>
    .container{
    border:1px solid black;
    border-radius:1vw;
    color:white;
    background-color:rgb(18, 22, 10);
    padding:1vw;
    margin-bottom:2vh;
    }
    </style>
    <body>
    <h1>Products</h1>
    ${JSON.parse(jsonData).map((prod) => {
            return `<div class="container">
        <h2>Name: ${prod.name}</h2>
        <p>Class:${prod.class}</p>
        <p>Roll No.: ${prod.roll_no}</p>
        </div>`


        }).join(" ")
            }
    </body>
    </head>
    </html>`;



        //tilll
        res.end(myHTML);
    }
    if (req.url === '/adddata' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', async () => {
            let data = JSON.parse(body);
            const filedata = await fs.readFile('data.json');
            let jsondata = JSON.parse(filedata);
            jsondata.push(data);
            await fs.writeFile('data.json', JSON.stringify(jsondata));
            res.end(JSON.stringify({ message: "data added successfully" }));
        })
    }

    //till here
})

server.listen(9000, (err) => {
    if (err) console.log(err.message);
    console.log("server is running at http://localhost:9000")
})