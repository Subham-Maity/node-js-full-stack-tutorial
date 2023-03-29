


## ⭐ What is Synchronous ?


<p align="center">
                <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                src="https://media.giphy.com/media/3oEduZIs7FDASKf23m/giphy.gif"
               />
            </p>



Synchronous: Tasks run one after another, waiting for each to finish before starting the next. Example: Washing clothes, then drying, then ironing. Each task waits for the previous to finish.


Suppose I have three functions. `Function A` , `Function B` , `Function C`.

In this case,
  - `Function A` runs and completes
    - `Function B` runs after `Function A` completes and completes
      - `Function C` runs after `Function B` completes and completes


> The next function doesn't start until the previous one has completed. In other words, the functions are executed in a sequential order.




## ⭐ What is Asynchronous ?

   
Asynchronous: Tasks can run simultaneously, not waiting for others to finish. Example: Washing clothes, while another set is drying, and another is being ironed. Tasks happen independently without waiting.


Suppose I have three functions. `Function A` , `Function B` , `Function C`.

 In this case,
  - `Function A` runs and starts in the background
  - `Function B` runs and starts in the background
  - `Function C` runs and starts in the background
     - `Function A` completes
     - `Function B` completes
     - `Function C` completes


> The next function doesn't have to wait for the previous one to complete before starting. In other words, the functions are executed concurrently.





## ⭐ Synchronous Basic Code



 ```js filename="index.js"

 console.log("Function 1");
 console.log("Function 2");
 console.log("Function 3");
 ```

 ```bash filename="output"

    Function 1
    Function 2
    Function 3
 ```


 In this example, the program will execute the functions one after the other in order. So it will log "Function 1", then "Function 2", and then "Function 3".

 This is because synchronous execution means that the program will wait for a function to finish before moving on to the next one.







## ⭐ Asynchronous Basic Code


 ```js filename="index.js"

console.log("Function 1");
setTimeout(() => {
console.log("Function 2");
}, 2000);
console.log("Function 3");
 ```

 ```bash filename="output"

    Function 1
    Function 3
    Function 2
 ```


 In this example,

 - The code starts by logging "Function 1" to the console.
 - The setTimeout function is called, which delays the execution of its callback function by 2000 milliseconds (2 seconds).
 - While the setTimeout function is waiting for the delay to complete, the program moves on to the next line of code, which logs "Function 3" to the console.
 - After 2 seconds, the callback function inside the setTimeout function is executed, logging "Function 2" to the console.

So even though the setTimeout function is called before "Function 3" is logged, it doesn't block the program from executing the next line of code, resulting in "Function 3" being logged before "Function 2".




## ⭐ Asynchronous More Examples


 ```js filename="index.js"

 let x=10;
 let y=0;

 setTimeout(() => {
  y = 20;
 }, 2000);

 console.log(x+y);
```

```bash filename="output"
 10
```

Instead of 30 we get 10. This is because the setTimeout function is called after the console.log function, so the program will log 10(x+y where y=0) to the console before the setTimeout function is executed, which sets y to 20.

> setTimeout is a function that is built into the browser. It takes two arguments: a callback function and a delay in milliseconds. The callback function is executed after the delay has passed.


> In Synchronous operations tasks are performed one at a time,
> In Asynchronous, Second Task do not wait to finish First Task



