const express=require('express');
const fs=require('fs');

const app=express();
app.use(express.json());

let users=[];

const readData=()=>{
    users=fs.readFile("./data.json","utf-8");
}

const writeData=()=>{
    users=fs.writeFile("./data.json",JSON.stringify(users,null,2));
}

// app.get("/getdata",async(req , res))