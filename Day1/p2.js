const fs=require('fs')

const data=fs.readFileSync("data.txt","utf-8")
console.log(data)

const input="new data to input";
fs.writeFileSync("data.txt",input);

console.log(data)

