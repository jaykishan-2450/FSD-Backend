const fs=require('fs')

const data="async data to write in the file";   
fs.writeFile("data.txt",data,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Data written successfully");
}) ;    