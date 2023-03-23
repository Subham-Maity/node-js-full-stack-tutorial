## ⭐ Understanding Package.json


<p align="center">
                <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                src="https://media.giphy.com/media/wTgYlmxctT2O4/giphy.gif"
               />
            </p>


<h12>
 Let's Understand the Package.json
 </h12>

<p>

The package.json file is the heart of any Node.js project. It is the place where we define the project's metadata, including its name, version, description, main entry point, dependencies, and more. It is also where we define the scripts that we can run using the npm run command.

</p>


> - In simple words, the package.json file saves all the information about the project and its dependencies. It also contains the scripts that we can run using the npm run command.
> - If you want to recreate the project on another machine, you can use the package.json file to install all the dependencies and run the project.


*********

<h12>
 Let's Make a Package.json
</h12>

1. Open the terminal and navigate to the project folder.
2. Run the following command to create a package.json file.
```bash
npm init
```
3. Now you will see a series of questions in the terminal. You can press the Enter key to accept the default value for each question. The default values are shown in square brackets.

```bash
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.

package name: (node-js-full-stack-tutorial)
version: (1.0.0)
description: Node.js Full Stack Tutorial
entry point: (index.js)
test command:
git repository:
keywords:
author: Subham Maity
license: (ISC)

Is this OK? (yes)
```

4. After answering all the questions, you will get a file named package.json in the project folder. The package.json file will look like this:

```json filename="package.json"

{
  "name": "node-js-full-stack-tutorial",
  "version": "1.0.0",
  "description": "Node.js Full Stack Tutorial",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Subham Maity",
  "license": "ISC"
}
```

> - The name field is the name of the project.
> - The version field is the version of the project.
> - The description field is the description of the project.
> - The main field is the entry point of the project meaning the file that will be executed when we run the project.
> - The scripts field is an object that contains the scripts that we can run using the npm run command.
> - The author field is the name of the author of the project.
> - The license field is the license of the project.

*********

<h12> How to Install Additional Dependencies</h12>

1. Open the terminal and navigate to the project folder.
2. Let's suppose we want to install `colorful console` so search on google `colorful console` and click on the first [link](https://www.npmjs.com/package/colors).
3. Copy the command `npm install colors` and paste it in the terminal.
4. When you hit enter you will see the following changes
- Create a new folder named node_modules in the project folder.
- Create a new file named package-lock.json in the project folder.
- Update the package.json file.

```json filename="package.json" /"colors": "^1.4.0"/
{
  "name": "node-js-full-stack-tutorial",
  "version": "1.0.0",
  "description": "Node.js Full Stack Tutorial",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Subham Maity",
  "license": "ISC",
  "dependencies": {
    "colors": "^1.4.0"
  }
}
```
- colors is the name of the package that we installed and ^1.4.0 is the version of the package that we installed.

Let install another package `simple logs` and see what happens.

```bash
npm install simple-logs
```


> Now if you open node_modules folder you will see two folders named colors and simple-logs even you can see another folders because these two packages have their own dependencies.


*********

<h12> What is package-lock.json</h12>

<p>
The package-lock.json file is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
</p>



<PhotoView   src="https://user-images.githubusercontent.com/97989643/227352177-616e1fc4-55e6-432b-85a1-4cb0b59108a6.png" alt="example" >
      <img  className="bg-purple-900 dark:bg-stone-900" style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} align="center"  src="https://user-images.githubusercontent.com/97989643/227352177-616e1fc4-55e6-432b-85a1-4cb0b59108a6.png" alt="example" />
                </PhotoView>
            </PhotoProvider>



```json filename="package-lock.json"

{
  "name": "node-js-full-stack-tutorial",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "node-js-full-stack-tutorial",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "colors": "^1.4.0",
        "simple-logs": "^0.2.11"
      }
    },
    "node_modules/colors": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/colors/-/colors-1.4.0.tgz",
      "integrity": "sha512-a+UqTh4kgZg/SlGvfbzDHpgRu7AAQOmmqRHJnxhRZICKFUT91brVhNNt58CMWU9PsBbv3PDCZUHbVxuDiH2mtA==",
      "engines": {
        "node": ">=0.1.90"
      }
    },
    "node_modules/simple-logs": {
      "version": "0.2.11",
      "resolved": "https://registry.npmjs.org/simple-logs/-/simple-logs-0.2.11.tgz",
      "integrity": "sha512-xByfJr26EY78A85FsGOHTovHrq3Tedo2bURLynhL9zHNvTo5H2X210q4HN3eY9QJVmpNMpHOBZytLVAmHgrUlg==",
      "engines": {
        "node": ">=0.6"
      }
    }
  }
}

```



> If you delete the node_modules folder and package-lock.json file , this will not affect your project because when you run the project npm will automatically install the dependencies.

> -⚡ But if you delete the package.json file then you will not be able to run the project because npm will not know which dependencies to install.


*********

<h12> How to Uninstall Dependencies</h12>

<p>
To uninstall a package, you can use the npm uninstall command. For example, to uninstall the colors package, you can run the following command:
```bash
npm uninstall colors
```
</p>

*********

<h12> How to Update Dependencies</h12>

<p>
To update a package, you can use the npm update command. For example, to update the colors package, you can run the following command:
```bash
npm update colors
```

</p>

*********

<h12> How to Install Specific Version of a Package</h12>

<p>

To install a specific version of a package, you can use the npm install command with the @ character followed by the version number. For example, to install the colors package version 1.3.3, you can run the following command:

```bash
npm install colors@1.3.3
```

</p>

*********

<h12> Let's use colors package</h12>



1. Open the index.js file and import the colors package at the top of the file like this:

```js filename="index.js"

const colors = require('colors');
```

2. Now let's use the colors package to print some colored text in the console. Replace the code in the index.js file with the following code:

```js filename="index.js"
const colors = require('colors');

//This will print the text in red
console.log('Hello World'.rainbow);

//This will print the text in blue
console.log('Hello World'.blue);

//This will print the text in yellow
console.log('Hello World'.yellow);

//This will print the text in green
console.log('Hello World'.green);

//This will print the text in magenta
console.log('Hello World'.magenta);

//This will print the text in cyan
console.log('Hello World'.cyan);

//This will print the text in white
console.log('Hello World'.white);

//This will print the text in gray
console.log('Hello World'.gray);
```

3. Now run the project using the following command:

```bash
npm start
```

4. You will see hello world printed in different colors in the console.


> Node JS is single threaded. This means that it can only execute one task at a time. This is why Node JS is very fast and efficient.We will learn more about Node JS in the next chapter.



