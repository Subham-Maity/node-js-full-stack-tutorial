// const fs = require('fs')
// fs.writeFileSync('hello.txt', 'Hello World')

// console.log("Our directory is " + __dirname)

// console.log("Our file name is " + __filename)



const { writeFileSync } = require('fs')
writeFileSync('hello.txt', 'Hello World')