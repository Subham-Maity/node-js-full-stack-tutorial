# [Website View](https://codexam.vercel.app/docs/node/node3)



## ⭐ Install and Setup Node Js


<p align="center">
                <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                src="https://media.giphy.com/media/fYI4NhQRkBQFP6U9cR/giphy.gif"
               />
      </p>



### ⚡ Method 1: Using the Installer

- 1. Visit the official Node.js website [here](https://nodejs.org/en/download/) and download the `.msi` file according to your system environment (32-bit or 64-bit).
- 2. Run the Node.js setup wizard by double-clicking on the downloaded `.msi` file.
- 3. Click **Next** to proceed through the setup wizard.
- 4. Accept the terms in the License Agreement and click **Next**.
- 5. Choose the destination folder where Node.js will be installed and click **Next**.
- 6. Select the features you want to install and click **Next**.
- 7. Click **Install** to start the installation process.
- 8. Once the installation is complete, click **Finish**.

### ⚡ Method 2: Using a Package Manager

- 1. Choose a package manager for your operating system from [this list](https://nodejs.org/en/download/package-manager/).
- 2. Follow the instructions on the package manager's website to install Node.js. For example, for Windows, you can use Chocolatey, Scoop, or Winget.

> Note: Some package managers may require additional steps or commands to install Node.js. Refer to the documentation of the package manager for more details.

### ⚡ Verifying the Installation

To verify that Node.js is installed on your computer, open a terminal or command prompt and type `node -v`. This should display the version of Node.js that you have installed.
### ⚡ Updating Node.js

To update Node.js to the latest version, you can either download the latest installer from the Node.js website and run it or use a package manager to update it.
#### 📃 Using the Installer

- 1. Visit the official Node.js website [here](https://nodejs.org/en/download/) and download the latest `.msi` file according to your system environment (32-bit or 64-bit).
- 2. Run the Node.js setup wizard by double-clicking on the downloaded `.msi` file.
- 3. Follow the same steps as when installing Node.js for the first time.
#### 📃 Using a Package Manager

Open a terminal or command prompt and type in the command to update Node.js using your package manager of choice. For example, for Windows using Chocolatey, you can type `choco upgrade nodejs`.

> Note: The command to update Node.js may vary depending on your package manager. Refer to its documentation for more details.

### ⚡ Running a Node.js Program

To run a Node.js program, you need to create a file with the `.js` extension and write some JavaScript code in it.

- 1. Open a text editor such as Notepad or Visual Studio Code.
- 2. Type in some JavaScript code such as `console.log('Hello, world!')`.
- 3. Save the file with a `.js` extension such as `hello.js`.
- 4. Open a terminal or command prompt and navigate to the directory where `hello.js` is located using `cd` command.
- 5. Type `node hello.js` and press Enter.

This should print `Hello, world!` to the terminal or command prompt.






## ⭐ Install NPM and Node



### What is NPM?

> In simple words, `npm` controls the packages that you use in your `Node.js` projects. It lets you download and use free packages or modules from the npm registry, and also lets you publish and distribute your own packages or modules.
  - `npm` is a package manager for `Node.js`, which is a JavaScript runtime

  - `npm` lets you download and use free packages or modules from the npm registry

  - `npm` also lets you publish and distribute your own packages or modules

  - `npm` helps you manage the dependencies, versions, and scripts of your `Node.js` projects

  - `npm` is included when you install `Node.js` on your computer






## ⭐ Some IDE for Node Js




### 1. Visual Studio Code (VS Code)
- **Key Features:** Debugging, IntelliSense, Git integration, extensions marketplace, integrated terminal, code snippets, built-in JavaScript/TypeScript support.
- **Why Use It:** VS Code is a free, open-source, and highly customizable IDE that supports a wide range of programming languages including Node.js. It has a large and active community that creates and maintains a variety of extensions, making it a powerful tool for Node.js developers.
- **Download Link:** [Download VS Code](https://code.visualstudio.com/download)
- **Note:** VS Code also has a Node.js extension that provides additional features like auto-completion, debugging, and npm integration.

### 2. WebStorm
- **Key Features:** Refactoring, debugging, testing, code analysis, intelligent code completion, Git integration, integrated terminal.
- **Why Use It:** WebStorm is a powerful and user-friendly IDE that provides a range of features specifically designed for Node.js development. It also has built-in support for various web technologies like HTML, CSS, and JavaScript, making it a great choice for full-stack developers.
- **Download Link:** [Download WebStorm](https://www.jetbrains.com/webstorm/download/)
- **Note:** WebStorm is a paid IDE, but it offers a free trial period.

### 3. Atom
- **Key Features:** Customizable UI, Git integration, package manager, built-in JavaScript/Node.js support, multiple panes, code snippets.
- **Why Use It:** Atom is a free and open-source text editor that is highly customizable and has a thriving community of developers who contribute to its ecosystem of packages and plugins. It also has built-in support for Node.js, making it a great choice for Node.js developers.
- **Download Link:** [Download Atom](https://atom.io/)
- **Note:** Atom has a slower performance compared to other IDEs, especially when dealing with large projects.

### 4. Sublime Text
- **Key Features:** Multiple cursors, command palette, powerful search and replace, code snippets, Git integration, customizability.
- **Why Use It:** Sublime Text is a lightweight and fast text editor that is highly customizable and has a large library of plugins and packages. It has built-in support for JavaScript and Node.js, making it a popular choice among web developers.
- **Download Link:** [Download Sublime Text](https://www.sublimetext.com/)
- **Note:** Sublime Text is a paid text editor, but it offers a free trial period.


| IDE/Text Editor | Pros | Cons |
| --- | --- | --- |
| Visual Studio Code | • Free and open source • Large and active community • Customizable UI • Builtin support for JavaScript/Node.js | • Can be resource intensive • Some features require extensions • Limited support for larger projects |
| WebStorm | • Builtin support for Node.js development • Intuitive and user friendly interface • Great for full stack development • Robust set of features | • Paid IDE • Can be resource intensive  |
| Atom | • Free and open source • Highly customizable • Large library of plugins and packages • Builtin support for Node.js | • Slower performance compared to other IDEs • Some features require packages • Limited support for larger projects |
| Sublime Text | • Lightweight and fast • Highly customizable • Large library of plugins and packages • Builtin support for JavaScript/Node.js | • Paid text editor • Limited support for larger projects • Some features require packages |



