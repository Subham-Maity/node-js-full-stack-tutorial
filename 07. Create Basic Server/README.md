<h2>🚀 Basic Server Creation:</h2>

- Create a file named `server.js` in the project root.

- Add the following code to set up the server:

```js
const http = require('http');
```
> Handles server requests and responses.

- Create the server using `createServer()` and listen on port 4500:

```js
http.createServer((req, res) => {
    res.write('Hello World');
    res.end();
}).listen(4500);
```
> - `createServer()` creates the server.
> - `listen(4500)` sets the server to run on port 4500.

- Run the server with:

```bash
node server.js
```

- Open `localhost:4500` in the browser to see the output:

```bash
Hello World
```

- Additional: Send HTML to the client:

```js
http.createServer((req, res) => {
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(4500);
```

<h2>🛠 Code Breakdown:</h2>

1. Create a function named `data()` and pass `req` and `res`:

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

2. Pass the `data` function to `createServer()`:

```js
http.createServer(data).listen(4500);
```

<h2>🧐 Understanding Arrow Functions:</h2>

- Arrow functions provide a concise syntax:

```js
// Normal Function
function multiply(a, b) {
    return a * b;
}

// Arrow Function
const multiply = (a, b) => a * b;
```

> No need for the `return` statement in arrow functions if it's a single line.

<h2>📌 Simplified Code:</h2>

```js
// Normal Function
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));
```

```js
// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));
```

🚀 Now, go create amazing servers!