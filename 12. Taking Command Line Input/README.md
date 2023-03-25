



## ⭐ Taking Command Line Input Using process.argv

<p align="center">
                <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                src="https://media.giphy.com/media/tNKDWV1sZWxKInkpuc/giphy.gif"
               />
            </p>



<Mark>Problem Statement</Mark> : Suppose you run `node index.js abc` in the terminal. You can't give input to the program.


1. In your index.js file, write the following code.
```js
    console.log(process.argv);
```
- `process` - `process` is a global object in Node.js that provides information and control over the current Node.js process. It has several properties and methods, one of which is `argv`.
- `argv` - argv(Argument Vector) is an array that holds the command-line arguments passed to the Node.js process when it was started. The first element of `argv` (at index 0) is the path to the Node.js executable, and the second element (at index 1) is the path to the JavaScript file being executed. Any additional arguments passed to the script will be stored in the subsequent elements of the array (starting from index 2).

Example:

Consider a script named `example.js` with the following content:

```javascript
   console.log(process.argv);
```

If you run `node example.js arg1 arg2`, the output will be:

```
   [
     '/path/to/node',
     '/path/to/example.js',
     'arg1',
     'arg2'
   ]
```

In this case, `arg1` and `arg2` are additional command-line arguments passed to the script. You can access them using `process.argv[2]` and `process.argv[3]`, respectively. This is useful for handling user input or configuring your script based on command-line options.

2. Now run `node index.js abc` in the terminal. You can see the output as follows:

```js
  [
    '/usr/local/bin/node',
    '/Users/yourname/Desktop/NodeJS/index.js',
    'abc'
  ]
  ```
> - Here first element is the path to the Node.js executable.
> - Second element is the path to the JavaScript file being executed.
> - Third element is the input that you have given.

3. Now, you can access the input using `process.argv[2]`. For example, if you want to print the input, you can write the following code:

```js
    console.log(process.argv[2]);
```
4. Now run `node index.js abc` in the terminal. You can see the output as follows:

```js
    abc
```

## ⭐ Creating a File Using writeFileSync()



<Mark>Problem Statement</Mark> : Three inputs will be given to create a file. The second argument will be the file name. The third argument is the file's content.


1. First import the `fs` module.
```js
    const fs = require('fs');
```
2. We need to take the input from the command line. So, we will use `process.argv`. We will store the input in a variable.
```js
    const fileName = process.argv;
```
3. Now, we will create a file using the `fs` module. We will use the `writeFileSync` method. It takes two arguments. The first argument is the file name. The second argument is the content of the file.
```js
    fs.writeFileSync(fileName[2], fileName[3]);
```
> - `writeFileSync` - The `writeFileSync` method is used to write data to a file, replacing the file if it already exists. The method takes two arguments. The first argument is the file name. The second argument is the content of the file.
> - `fileName[2]` - It is the file name.
> - `fileName[3]` - It is the content of the file.
> - We don't use 0 and 1 index because 0 index is the path to the Node.js executable and 1 index is the path to the JavaScript file being executed.

4. Now, run `node index.js abc.txt "Hello World"` in the terminal.
5. Now, you can see that a file named `abc.txt` is created in the current directory. You can open the file and see the content.
```js
    Hello World
```



## ⭐ Remove and Add a File Using WriteFileSync & UnlinkSync


<Mark>Problem Statement</Mark> : Now I want to remove the file and add the file.


1. First use `if statement` to check the command.
```js
    if (process.argv[2] == 'add') {
        // code
    }
```
- Inside the `if statement`, we will use `writeFileSync` method to add the file.
```js
    const fs = require('fs');

    const fileName = process.argv;

    if (fileName[2] == 'add')
    {
      fs.writeFileSync(fileName[3], fileName[4]);
    }
```

2. else if statement to check the command.
```js
        else if (process.argv[2] == 'remove') {
            // code
        }
```
- Inside the `else if statement`, we will use `unlinkSync` method to remove the file.
```js
    const fs = require('fs');

    const fileName = process.argv;

     if (fileName[2] == 'add')
        {
          fs.writeFileSync(fileName[3], fileName[4]);
        }

     else  if (fileName[2] == 'remove')

        {
        fs.unlinkSync(fileName[3]);
        }

```
3. `else statement` to check the command.

```js
    else {
        // code
    }
```
- Inside the `else statement`, we will use `console.log` method to print the message.

```js
    const fs = require("fs");

    const fileName = process.argv;

    if (fileName[2] == "add") {
      fs.writeFileSync(fileName[3], fileName[4]);
    } else if (fileName[2] == "remove") {
      fs.unlinkSync(fileName[3]);
    }
    else {
      console.log("Please enter a valid command");
    }


```

4. Now, run `node index.js add subham.txt "Hello Xam"` in the terminal.

5. Now, you can see that a file named `subham.txt` is created in the current directory. You can open the file and see the content.

```js
    Hello Xam
```

6. Now, run `node index.js remove subham.txt` in the terminal.

7. Now, you can see that a file named `subham.txt` is removed from the current directory.
