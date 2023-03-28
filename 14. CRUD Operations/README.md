## ⭐ CRUD Operations


  <p align="center">
      <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
          src="https://media.giphy.com/media/l4KhMR4p58zFZZlSg/giphy.gif"/>
    </p>


 <h12 className ="font-bold text-2xl sm:text-4xl text-gray-800 dark:text-gray-400 align-left mt-8">
 What is CRUD ?
 </h12>

<p className="text-xl sm:text-2xl text-gray-800 dark:text-gray-400 align-left mt-8">
  CRUD stands for Create, Read, Update, and Delete. These are the basic operations that you can perform on data in a database.

   - Create: Create a new record in a database.
   - Read: Read an existing record from a database.
   - Update: Update an existing record in a database.
   - Delete: Delete an existing record from a database.

   

### 📝 Create

1. When we work with the file system module, we have to use the `fs` module.
2. `fs.writeFileSync('hello.txt', 'Hello from Node.js');` will create a file named `hello.txt` and write the text `Hello from Node.js` to it.
3. But if I want to make this file inside a folder named `crud`, then I have to write `fs.writeFileSync('crud/hello.txt', 'Hello from Node.js');`.
       or
You can use path module to create a file inside a folder.
```js
   // Import the path module to manipulate file and directory paths
   const path = require('path');
   // Import the fs module to perform file system operations
   const fs = require('fs');

   // Use the path.join() method to combine the current directory (__dirname) and the name of the crud folder into a single path
   const dirPath = path.join(__dirname, 'crud');
   // Use a template literal to append the name of the hello.txt file to the dirPath variable and store the result in filePath
   const filePath = `${dirPath}/hello.txt`;

   // Use the fs.writeFileSync() method to create a new file at the filePath location and write a string of text to it
   fs.writeFileSync(filePath, 'Hello from Node.js');
```

### 📝 Read

1. To read a file, we can use the `fs.readFile()` method.
2. Use `readFile()` method to read the contents of the `hello.txt` file.
```js
const path = require('path');
const fs = require('fs');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/hello.txt`;
   // Read
 fs.readFile(filePath,(err, data) => {
     console.log(data)
  });
```
> You will get a result with a buffer `<Buffer 48 65 6c 6c 6f 20 66 72 6f 6d 20 4e 6f 64 65 2e 6a 73>`. Here buffer is a temporary storage spot for a file while it is being transferred from one place to another.
3. To solve this you have to pass another parameter `utf-8` to the `readFile()` method.
```js
const path = require('path');
const fs = require('fs');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/hello.txt`;

//Read
 fs.readFile(filePath,`utf-8`,(err, data) => {
    console.log(data)
  });
```
> we use `utf-8` to convert the buffer to a string.

### 📝 Update
1. To update a file, we can use the `fs.appendFile()` method.

```js
// Update
  fs.appendFile(filePath, 'CodeXam', (err) => {
    if (err) throw err;
   console.log('The "data to append" was appended to file!');
  }

);

```

or

```js
// Update
   fs.appendFile(filePath, 'CodeXam', (err) => {
    if(!err){
      console.log('The "data to append" was appended to file!');
      }
    });
```

> This will append the text `CodeXam` to the end of the `hello.txt` file.
> If you run the file `node index.js` again, you will see the text `CodeXam` again appended to the end of the `hello.txt` file (repeatedly).

### 📝 Rename

1. We can use the `fs.rename()` method to rename a file.
```js
fs.rename(filePath, `${dirPath}/rename.txt`, (err) => {
   if (err) throw err;
    console.log('Rename complete!');
    }

 );
```
- rename() method takes two parameters, the first is the path to the file you want to rename, and the second is the path to the new file name.
- here filePath is the path to the file you want to rename and `${dirPath}/rename.txt` is the path to the new file name.
> This will rename the `hello.txt` file to `rename.txt`.
> If you run the file `node index.js` again, you will see the text `CodeXam` again appended to the end of the `rename.txt` file (repeatedly).


### 📝 Delete

1. To delete a file, we can use the `fs.unlinkSync()` method.
```js
fs.unlinkSync(`${dirPath}/rename.txt`);
```
- unlinkSync() method takes one parameter, the path to the file you want to delete.
> This will delete the `rename.txt` file.



A **Buffer** in Node.js can be thought of as a temporary storage spot for data. It's a way to work with binary data, which is data that is represented as a sequence of bytes. You can use it to read and write files, work with network data, and more.

Here's an example: Let's say you want to download an image from the internet and save it to your computer. You can use a Buffer to temporarily store the image data while it's being downloaded and then save it to a file.

```javascript
 const https = require('https');
 const fs = require('fs');

const url = 'https://example.com/image.jpg';
const file = fs.createWriteStream('image.jpg');

https.get(url, (response) => {
  response.pipe(file);
});
```

This code downloads an image from the specified URL and saves it to a file called `image.jpg`. The image data is temporarily stored in a Buffer while it's being downloaded and written to the file.
