const express=require('express');

const app=express();
const fs=require('fs');
app.use(express.json());

let Users=require('./data');
    // {id:1,name:"user1"},
    // {id:2,name:"user2"},
    // {id:3,name:"user3"},
    // {id:4,name:"user4"},


app.get("/api/users",(req,res)=>{
    // res.send(JSON.stringify(users));
    res.json(Users) //new syntax with express 
    
})


app.get('/test',(req,res)=>{
    res.send("welcome to backend server using express")
})

app.post("/api/users",(req,res)=>{
    // console.log(req.body)
    const data=req.body;
    // console.log(users[users.legnth-1].id)
    const newId=Users.length>0?Users[Users.length-1].id+1:1;
    data["id"]=newId;
    Users.push(data);
    fs.writeFileSync("./data.json",JSON.stringify(Users))
    // console.log(users)
    res.status(200).json({message:"data recieved succesfully",data:data})

})
app.listen(9000,()=>{
    console.log("server is running at http://localhost:9000");
})