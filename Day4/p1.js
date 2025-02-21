const http=require('http');

const server=http.createServer(async(req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    const data=await fetch("https://fakestoreapi.com/products");
    const jsonData=await data.json();
    const myHTML=`<html>
    <head>
    <title>Products</title>
    <style>
    .container{
    border:1px solid black;
    border-radius:1vw;
    color:white;
    background-color:rgb(0,50,50);
    padding:1vw;
    margin-bottom:2vh;
    }
    </style>
    <body>
    <h1>Products</h1>
    ${
       jsonData.map((prod)=>{
        return `<div class="container">
        <h2>${prod.title}</h2>
        <p>${prod.description}</p>
        <img src="${prod.image}" height="200" width="150" alt="${prod.title}">
        <p>$ ${prod.price}</p>
        </div>`


       }).join(" ")
    }
    </body>
    </head>
    </html>`;
    res.end(myHTML);

    // res.end(JSON.stringify(jsonData));
})

server.listen(9000,(err)=>{
    if(err) throw err;
    console.log("server is running at http://localhost:9000");

});