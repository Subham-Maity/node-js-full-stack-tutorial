
## ⭐ What is Core Modules ?

<p align="center">
                <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                src="https://media.giphy.com/media/60JVF2ptenJTJHBUp6/giphy.gif"
               />
            </p>


Core modules are modules that are built into Node.js and come automatically with its installation. These modules include bare minimum functionalities of Node.js and are compiled into its binary distribution. You can load these modules into your program by using the require function


Some examples of core modules in Node.js include `http`, `fs`, `path`, `os`, and `buffer` among others. These modules provide basic functionalities like creating an HTTP server (`http`), handling the file system (`fs`), dealing with file paths (`path`), providing information about the operating system (`os`), and handling binary data (`buffer`) .




## ⭐ What is global modules ?

<div className= "mt-3"></div>
<div className="cardTexture5">
    <h1 style={{padding: "8px"}} className = "mb-8 text-center font-bold text-transparent sm:text-4xl text-[25px] tex bg-clip-text bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-sky-700 via-cyan-500 to-neutral-300" align="middle">Explain</h1>
    <h11 className="textStyle1 " >


Global modules are Node.js packages that are installed on your system rather than your project directory. This means that they can be used anywhere on your local computer.There is no need to import them into your project.

For example, if you install the `nodemon` package globally, you can use it anywhere on your computer. You don’t need to import it into your project. You can simply run `nodemon` in your terminal to start the server.

```js
console.log("Hello World")
```
> console.log is a global module




## ⭐ What is Non-global modules ?



In Node.js, a non-global module refers to a module that is not part of the Node.js core and is not installed globally. Instead, it is created locally within your Node.js application. These modules can be a single file or a collection of multiple files/folders. And you need to import them into your project before you can use them.

- Example 1 :
```js
const fs = require('fs')
fs.writeFileSync('hello.txt', 'Hello World')
```
> fs (file system) is a non-global module and we use this module to create a file named hello.txt and write "Hello World" in it.



- Example 2 :
```js
console.log("Our directory is " + __dirname)
//output : Our directory is C:\Users\Subham Maity\Desktop\Node.js\Node.js Tutorial
```
> __dirname is a non-global module and we use this module to get the current directory path.



```js
console.log("Our file name is " + __filename)
//output : Our file name is C:\Users\Subham Maity\Desktop\Node.js\Node.js Tutorial\index.js
```
> __filename is a non-global module and we use this module to get the current file path.
> 

**************

**************

**************

⚡ It's recommended always `const abc = require('abc')` should be at the top of the file and not in the middle of the code but if you want to use it in the middle of the code then it will work but it's not recommended.



> If you want to import only a specific function from a module, you can use the destructuring syntax. For example, if you want to import the `writeFileSync` function from the `fs` module, you can do it like this:

```js
const { writeFileSync } = require('fs')
writeFileSync('hello.txt', 'Hello World')
```
or

```js
const fs = require('fs').writeFileSync;
fs('hello.txt', 'Hello World')
```

- here if you want you can change the variable name of the function like this :

```js
const abc = require('fs').writeFileSync;
abc('hello.txt', 'Hello World')
```

