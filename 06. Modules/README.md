## ⭐ Core Modules
Core modules are built into Node.js and come with its installation. They provide basic functionalities like creating an HTTP server (`http`), handling the file system (`fs`), dealing with file paths (`path`), providing OS info (`os`), and handling binary data (`buffer`). You can load these modules using the `require` function. 📚

## ⭐ Global Modules
Global modules are Node.js packages installed system-wide, meaning they can be used anywhere on your computer without importing them into your project. For instance, if you install `nodemon` globally, you can use it anywhere on your computer by simply running `nodemon` in your terminal. 🌐

```js
console.log("Hello World") // console.log is a global module
```

## ⭐ Non-global Modules
Non-global modules in Node.js are not part of the Node.js core and are not installed globally. They are created locally within your Node.js application and need to be imported into your project before use. 📁

- Example 1:
```js
const fs = require('fs')
fs.writeFileSync('hello.txt', 'Hello World') // fs (file system) is a non-global module
```

- Example 2:
```js
console.log("Our directory is " + __dirname) // __dirname is a non-global module
console.log("Our file name is " + __filename) // __filename is a non-global module
```

⚡ It's recommended to always place `const abc = require('abc')` at the top of the file.

> If you want to import only a specific function from a module, you can use the destructuring syntax:

```js
const { writeFileSync } = require('fs')
writeFileSync('hello.txt', 'Hello World')
```
or
```js
const fs = require('fs').writeFileSync;
fs('hello.txt', 'Hello World')
```
You can even change the variable name of the function:
```js
const abc = require('fs').writeFileSync;
abc('hello.txt', 'Hello World')
```