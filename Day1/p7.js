const fs=require('fs'); 

fs.mkdir("MyFolder1",{recursive:true},(err)=>{ //recursive:true is used to create the directory and its parent directories if they do not exist 
    if(err){
        console.log(err);
        return;         
    }
    console.log("directory created successfully");
});
fs.rmdir("MyFolder",(err)=>{
    if(err){
        console.log(err);
        return;         
    }
    console.log("directory deleted successfully");
});