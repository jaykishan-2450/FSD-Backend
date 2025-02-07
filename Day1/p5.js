const fs=require('fs')

const data="appending data to write in the file";   
fs.appendFile("data.txt",data,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Data appended successfully");
}) ;    
data1=fs.readFileSync("data.txt","utf-8");
console.log(data1)