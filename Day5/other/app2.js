const express=require('express');
const fs=require('fs/promises');
const { v4: uuidv4 } = require('uuid');

const app=express();
app.use(express.json());

let users=[];

//Funcion for reading data from file
const readData=async ()=>{
    const data= await fs.readFile("./data.json","utf-8");
    users=JSON.parse(data);
}


//Funcion for writing data from file
const writeData=async ()=>{
    await fs.writeFile("./data.json",JSON.stringify(users,null,2));
}


//API for getting all users
app.get("/getusers",async(req , res)=>{
    await readData();
    res.send(users);
})


//API for adding a user
app.post("/setuser",async(req , res)=>{
    let data=req.body;
    data.id = uuidv4();
    await readData();
    users.push(data);
    await writeData();
    res.send(`Data Added Successfully with name ${data.name}`)
});


//API for updating recors of a user
app.put("/updateuser/:id", async (req, res) => {
    const userId = req.params.id;
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).send("Name and age are required");
    }

    await readData();
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex !== -1) {
        users[userIndex].name = name;
        users[userIndex].age = age;
        await writeData();
        res.send("User Updated Successfully");
    } else {
        res.status(404).send("User Not Found");
    }
});



//API for deleting a user by id recieved in params
app.delete("/deleteuser/:id", async (req, res) => {
    const userId = req.params.id;

    await readData();
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        await writeData();
        res.send("User Deleted Successfully");
    } else {
        res.status(404).send("User Not Found");
    }
});





//running the server (currently on a localhost)
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})