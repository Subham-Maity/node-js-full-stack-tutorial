


## ⭐ Files Creation

<p align="center">
  <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                src="https://media.giphy.com/media/YrqkZ8o6jLqkt5VtG0/giphy.gif"
   />
</p>




<p className="text-xl sm:text-2xl text-gray-800 dark:text-gray-400 align-left mt-8">
        <Mark>Problem Statement</Mark> : Make files in a folder
    </p>

1. Create a folder named `files` in the root directory of your project.



making a simple file is very easy just use the fs module and call the writeFileSync method and pass the file name and the data you want to write in the file as the parameters.

```js
    const fs = require('fs');
    fs.writeFileSync('hello.txt', 'Hello World!');
```


2. Now do like this
```js
    const fs = require('fs');
    const path = require('path');
    const dirPath = path.join(__dirname, 'files');//__dirname will give the current directory name and files is the folder name

    //console.warn(dirPath);//this will print the path of the folder

    for (i = 0; i < 10; i++) {

    //fs.writeFileSync("hello.txt", "Hello World!");
    //this will create a file named hello.txt in the root directory and overwrite it if it already exists
    //So we need to add dirPath in the file name and make it dynamic like text1.txt,text2.txt,text3.txt etc

        fs.writeFileSync(dirPath + `/file${i}.txt`, `Hello World! ${i}`);

     //fs.writeFileSync(dirPath + `/file'+i+'.txt`, `Hello World!`+i);//this will also work
    }
```

> Now run `node index.js` and check the `files` folder. You should see 10 files with the names `file0.txt` to `file9.txt` and the contents `Hello World! X`, where X is the current value of `i`.


   

### Code Explanation

#### Step 1
```const fs = require('fs');```
- The `fs` module is used to interact with the file system in Node.js.

#### Step 2
```const path = require('path');```
- The `path` module provides utilities for working with file and directory paths.

#### Step 3
```const dirPath = path.join(__dirname, 'files');```
  - The `__dirname` variable is a special variable in Node.js that represents the directory name of the current module.
  - The `path.join()` method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
  - In this case, we're joining the current directory name with a subdirectory called "files".

#### Step 4
```for (i = 0; i < 10; i++) {```
  - This is a `for` loop that will run 10 times.

#### Step 5
```fs.writeFileSync(dirPath + `/file${i}.txt`, `Hello World! ${i}`);```
  - The `fs.writeFileSync()` method writes data to a file, replacing the file if it already exists.
  - In this case, we're writing a file to the "files" subdirectory with a filename of "fileX.txt", where X is the current value of `i`.
  - The contents of each file will be "Hello World! X", where X is the current value of `i`.

<p className="text-xl sm:text-2xl text-gray-800 dark:text-gray-400 align-left mt-8">
        <Mark>Problem Statement</Mark> : We need to see the files in the folder
    </p>

 3 . We are going to use readdir

 ```js
  fs.readdir(dirPath, (err, files) => {
     if (err) {
         console.error(err);
         return;
     }
     console.warn(files);
   });
```
   
`Output`

```
   [ 'file0.txt',
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    ]
```

    

### Code Explanation

`fs.readdir(dirPath, (err, files)` - The `fs.readdir()` method reads the contents of a directory.
- In this case, we're reading the contents of the "files" subdirectory.
- The `files` parameter is an array of filenames in the directory.
- The `err` parameter is an error object if an error occurred, or `null` if no error occurred

`console.warn(files);` - This will print the array of filenames to the console.

    



<p className="text-xl sm:text-2xl text-gray-800 dark:text-gray-400 align-left mt-8">
        <Mark>Problem Statement</Mark> : We don't want to see the files in the array format
</p>

4. We are going to use the forEach method to iterate over the array and print the files


forEach is a method that is used to iterate over an array.

Syntax
```js
    arr.forEach(abc => {
        console.warn(abc);
    });
```
or
 ```js
    arr.forEach((abc, index) => {
        console.warn(index, abc);
    });
```





```js
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            console.error(err);
            return;
        }
        files.forEach(file => {
            console.warn(file);
        });
    });
```
or
```js
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            console.error(err);
            return;
        }
        files.forEach((file, index) => {
            console.warn(index, file);
        });
    });
```

Output
```
    file0.txt
    file1.txt
    file2.txt
    file3.txt
    ...this will go on
```
    

### Code Explanation

`files.forEach(file => {` - This is a `forEach` loop that will iterate over the array of filenames.

`console.warn(file);` - This will print the filename to the console.





