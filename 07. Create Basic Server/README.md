

## ⭐ Make a Basic Server?

<p align="center">
                <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                src="https://media.giphy.com/media/OedNAbyUIUvX0fe4wm/giphy.gif"
               />
            </p>


 <h12 >Let's make a basic server..</h12>


1. Create a file named `server.js` in the root directory of your project.

2. Add the following code to the file.

```js
const http = require('http');
```
> This will handle the server's request and response.


3. Create a server using createServer() method.

```js
http.createServer().listen(4500);
```
> - This method can take a function as a parameter. We use this `createServer()` method to create a server. The `listen()` method is used to listen to the port number means the server will start on the port number 4500.

> - You can check this on official documentation of [http](https://nodejs.org/api/http.html#http_http_createserver_options_requestlistener).

4. Now, You have to pass two functions `req` and `res` as a parameter to the `createServer()` method.

```js
http.createServer((req, res) => {

}).listen(4500);
```
> - This is arrow function and the syntax of the arrow function is `abc((req, res) => {})`. First bracket is for the parameter and the second bracket is for the function. You can check this on official documentation of [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).
> - The `req` parameter is used to get the request from the client and the `res` parameter is used to send the response to the client.

5. I assume that no one actually sends a request to the server. So, we will send a response to the client.

```js

http.createServer((req, res) => {
    res.write('Hello World');
    res.end();
}).listen(4500);
```
- We need to use write() method to send the response to the client. The `write()` method can take a string or a buffer as a parameter. We can also use `end()` method to end the response. You can check this on official documentation of [http](https://nodejs.org/api/http.html#http_http_createserver_options_requestlistener).


6. Now, run the server using the following command.

```bash
node server.js
```
7. Now, open the browser and type `localhost:4500` in the address bar. You will see the following output.

```bash
Hello World
```

8. You can also send a html tag to the client.

```js
http.createServer((req, res) => {
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(4500);
```
- But remember you have to run the server again.


 <h12 >Let's break down the code .</h12>



1. FOR EXAMPLE: We will create a function named `data()` and we will pass the `req` and `res` as a parameter to the function.

```js
const data = (req, res) => {
    res.write('Hello World');
    res.end();
}

```

or

```js
function data(req, res) {
    res.write('Hello World');
    res.end();
}
```

2. Now, we will pass the `data` function as a parameter to the `createServer()` method.

```js
http.createServer(data).listen(4500);
```

3. Now run the server using the following command.

```bash
node server.js
```
> - You will get the same output as the previous one.


    <h12 >Let's Understand.</h12>


Basically, arrow function is a short form of the function just use const `function_name = (parameter) => {function body}` instead of `function function_name(parameter) {function body}`. You can check this on official documentation of [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).


1. We just copy the `data()` function and paste it in the `createServer()` method.

`old`
```js
http.createServer(
// function body
).listen(4500);
```
`new`
```js
http.createServer(

// function body
(req, res) => {
    res.write('Hello World');
    res.end();
}

).listen(4500);
```

### 📌 Simplified Code

```js filename="Normal Function"
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));
```

```js filename="Arrow Function"
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));
```
> here return is not required because it is a single line function.


Additionally you can check the js tutorial which is available on my website. You can check this on official documentation of [arrow function](https://code-xam.vercel.app/docs/js/js18).



