## ⭐ How to handle asynchronous data in Node js


<p align="center">
                <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                src="https://media.giphy.com/media/4qify5sjr92ec/giphy.gif"
               />
            </p>





<Mark>Problem Statement</Mark> :

```js filename="index.js"

let x=10;
let y=0;

setTimeout(() => {
     y = 20;
 }, 2000);

console.log(x+y);
```

```js filename="result.js"

 10

```
You can see even I set y=20 after 2 seconds, the result is 10. Why is that? Because the setTimeout function is asynchronous. It means it will not wait for the function to complete. It will execute the next line of code. So, the result is 10.

But what if I want to wait for the function to complete and then execute the next line of code so that the result will be 30. How can I do that?


### Solution

We will use the promise to solve this problem.



A promise is like a commitment to do something. When you make a promise, it's like saying "I will do this thing". At first, the promise is just waiting for you to do the thing you promised.

Once you actually do the thing, the promise is either kept or broken. If you successfully do the thing you promised, the promise is kept and you can say that it was "resolved". But if something goes wrong and you can't do the thing you promised, the promise is broken and you can say that it was "rejected".

So, a promise starts off as pending, waiting for you to do the thing you promised. Once you actually do it, the promise is either resolved or rejected, depending on whether you were able to do it successfully.


The Promise object has two states:

- Pending: The Promise is in a state of flux, and the result of the asynchronous operation has not yet been determined.
- Fulfilled: The Promise has been fulfilled, and the result of the asynchronous operation is available.
- Rejected: The Promise has been rejected, and the asynchronous operation failed.

> - To solve this, we use a Promise. A Promise is like a container that holds a value that might not be available yet but will be in the future.
> - Promises are used to handle asynchronous data in Node js and it takes two arguments, resolve and reject
> - The resolve function is called when the Promise is successful and the reject function is called when the Promise is unsuccessful.
> - They are used to avoid callback hell and make code more readable and maintainable.
> - You can use the then method to attach handlers to a promise that will be called when the promise is settled



- 1. We create a Promise called `waitingData` and use `setTimeout` inside it.
- 2. After 2 seconds, we give the Promise the new value (20) using `resolve(20)`.
- 3. We then use the `then()` method to handle the Promise's value when it's ready.
- 4. Inside the `then()` method, we update `y` with the new value and log the sum of `x` and `y`.
> the `then()` method is called when the promise is settled and it takes two arguments, resolve and reject and it is used to attach handlers to a promise that will be called when the promise is settled
- 5. By using a Promise, we make sure to log the sum only after the value of `y` is updated.

```js filename="index.js"

let x = 10;
let y = 0;

// Create a new Promise called waitingData
let waitingData = new Promise((resolve, reject) => {
  // Set a timeout of 2 seconds
  setTimeout(() => {
    // Resolve the Promise with the value 20
    resolve(20);
  }, 2000);
});

// Use .then() to handle the resolved value of the Promise
waitingData.then((data) => {
  // Set the value of b to be equal to the resolved value (which is 20)
  let b = data;
  // Log the result of adding x and b together to the console
  console.log(x + b);
});
```
```js filename="result.js"

30
```

> A Promise is an object that represents the eventual completion or failure of an asynchronous operation.


