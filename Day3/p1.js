const http=require('http');
const fs=require('fs/promises')

const server=http.createServer( async (req,res)=>{
    const data=await fs.readFile("./data.json")
    res.statusCode=200;
    res.setHeader('Content-type','application/json');
    const users= JSON.parse(data).map((user)=>{
        return user.name;
    })

    res.end(JSON.stringify(users));
});

server.listen(5000,(err)=>{
    if(err){
        console.log("error: ",err)
    }
    console.log("server is running at http://localhost:5000")
})