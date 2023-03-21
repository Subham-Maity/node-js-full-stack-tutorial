## ⭐ First Node js Script


<p align="center">
                <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                src="https://media.giphy.com/media/RTAyw3f7rdJjoGJJkg/giphy.gif"
               />
   </p>

1. If NodeJS is installed, you can check the version by running the following command in your terminal:
```bash
node -v
```
2. Type `node` in your terminal to start the NodeJS REPL (Read-Eval-Print-Loop) environment.

3. Type `console.log("Hello World")` in the REPL and press enter to print "Hello World" in the terminal.
4. Let's do some operation check it out.
```bash
var a = 10; //enter
console.log(a); //output: 10
```
4. You can notice `undefined` in the output.
> This is because the expression does not return any value. It just assigns the value to the variable when you do `console.log(a)`, it prints the value of the variable `a` which is `10`.

5. You can also do some mathematical operation in the REPL.
```bash
var a = 10; //enter
var b = 20; //enter
console.log(a+b); //output: 30
```
6. Create a folder named `nodeJs` and open cmd in that folder and type `code .` to open the folder in VS Code.
7. Make a file named `index.js` and type the following code in it.
> NodeJs is not a language, it is a runtime environment. It is used to run JavaScript code outside the browser. It is built on top of the V8 JavaScript engine. It is used to build server-side applications.
```js
console.log("Hello World");
```
8. Now open the terminal in VS Code and type `node index.js` to run the code.



> In vs code terminal if you compile by `node index.js` then you will the output of console.log() in the terminal and in browser you will get the output of `console.log()` in the browser console. Now the question is here the `console.log` is same in two place ?

- Node.js has a built-in console module that provides a simple debugging console similar to the JavaScript console mechanism provided by web browsers. The console module exports two specific components: a Console class with methods such as console.log(), console.error() and console.warn() that can be used to write to any Node.js stream; and a global console instance configured to write to process.stdout and process.stderr.

The implementation of the console object is similar in both Node.js and web browsers, which is why you can use methods like console.log() in the same way in both environments.

