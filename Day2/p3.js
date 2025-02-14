const http = require('http');

const user=[{
    name: "Rahul",
    age: 21,
    email:'rahul.gmail.com'
},
{
    name: "Rohit",
    age: 22,
    email:'rohit.gmail.com'
},
{
    name: "Raj",
    age: 23,
    email:'raj.gmail.com'
}];

const server=http.createServer(async (req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(user.map((item)=>{return {name:item.name}})));

})

server.listen(3000,()=>{
    console.log("Server is listening on port 3000");
}); // server is listening on port 3000