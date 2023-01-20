// Reading and Writing FIles
const fs = require('fs')

//Blocking COde Execution (Means the code is processed one after the other it is called Synchronous code which is not best practice)
const text = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(text)

const textout = `Node Tutorial: ${text}.\nCreated on ${Date.now()}`
fs.writeFileSync('./txt/output.txt', textout)
// const hello = "Hello World"
// console.log(hello)

//Non Blocking Code Execution called Asynchronous code
fs.readFile('./txt/output.txt', 'utf-8', (err, data) => {
    if(err) return console.log('Error, Do something!!!')
    console.log(data)
});

console.log("Reading file....")