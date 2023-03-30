// console.log("Function 1"); // logs "Function 1" to the console

// setTimeout(() => {
//   console.log("Function 2"); // logs "Function 2" to the console after a 2 second delay
// }, 2000);

// console.log("Function 3"); // logs "Function 3" to the console



let x=10;
let y=0;

let waitingData = new Promise((resolve, reject) => {

setTimeout(() => {
resolve(20)
}, 2000)

});

waitingData.then((data) => {
    b=data;
    console.log(x+b);
})
