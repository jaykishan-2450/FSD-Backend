const fs=require('fs')

const data=fs.readFile("data.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
}) ;

