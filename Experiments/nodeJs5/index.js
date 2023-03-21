const app = require("./app.js")

// console.log(app.add(2,3))


const arr = [1,2,3,4,5,6,7,8,9,10]

const greaterThan5 = arr.filter((element) => element > 5)

console.log(greaterThan5)