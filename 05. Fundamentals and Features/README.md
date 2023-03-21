## ⭐ Fundamentals and Features




<p align="center">
                <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                src="https://media.giphy.com/media/5Sl1sMiMJTgXXTZjrL/giphy.gif"
               />
            </p>

For NodeJs you need to have a basic knowledge of Javascript. If you are new to Javascript then you can check out my [tutorial on Javascript](https://codexam.vercel.app/docs/js)

### Some Important Notes

1. Suppose you make a file `app.js` and another file `index.js` and you want to import the `app.js` file like this

```js filename="app.js"
export const name = "Subham Maity"
export const age = 20
```

```js filename="index.js"
import {name,age} from "./app.js"
```
And in your terminal you run `node index.js` then you will get an error like this
```bash
SyntaxError: Cannot use import statement outside a module
```
This is because NodeJs doesn't support the `import` and `export` syntax. So you have to use the `module.exports` and `require` syntax.

```js filename="app.js"
module.exports = {
    name: "Subham Maity",
    age: 20
}
```

```js filename="index.js"
const {name,age} = require("./app.js")

console.log(name,age)
```

Now if you run `node index.js` then you will get the output like this
```bash
Subham Maity 20
```
2. You can even create a function in `app.js` and export it and then import it in `index.js` and use it.

```js filename="app.js"
module.exports = {
    add: (a,b) => a+b
}
```

```js filename="index.js"
const app = require("./app.js")

console.log(app.add(2,3))
```

Now if you run `node index.js` then you will get the output like this

```bash
5
```


What is filter in Javascript ?

- If you have a array like this

```js
const arr = [1,2,3,4,5,6,7,8,9,10]
```
and you want to traverse through the array and get the elements which are greater than 5 then you can use the `filter` method.

```js
const arr = [1,2,3,4,5,6,7,8,9,10]

const greaterThan5 = arr.filter((element) => element > 5)

console.log(greaterThan5)

```

Now if you run `node index.js` then you will get the output like this

```bash
[ 6, 7, 8, 9, 10 ]
```

- If you have a array like this

```js
const arr1 = [1,2,3,4,4,4,5,6,7,8,9,10]
```
and you want to traverse and find the value that is repeated the most then you can use the `filter` method.

```js
const arr1 = [1,2,3,4,4,4,5,6,7,8,9,10]

const mostRepeated = arr1.filter((element) =>
{
    return element === 4
})

console.log(mostRepeated)

```

Even you can you gretter than 5 and less than 8

```js
const arr1 = [1,2,3,4,4,4,5,6,7,8,9,10]

const mostRepeated = arr1.filter((element) =>
{
    return element > 5 && element < 8
})

console.log(mostRepeated)

```



