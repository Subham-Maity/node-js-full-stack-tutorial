
## ⭐ What is Nodemon Package


<p align="center">
                <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                src="https://media.giphy.com/media/kGiYTsIv3hXsxqFXU1/giphy.gif"
               />
            </p>



Suppose you made a change in your code and you want to see the changes in your browser. You have to stop the server and start it again. This is a very time-consuming process. So, to avoid this, we use the nodemon package. Nodemon is a package that automatically restarts the node application when file changes in the directory are detected.




## ⭐ How to Install Nodemon Package



1. First, search for the nodemon package in the npm website. Then, click on the link to go to the npm [website](https://www.npmjs.com/package/nodemon).
     - Copy the installation command from the npm website `npm i nodemon`

     - If you add `-g` at the end of the command, it will install the package globally. So you can use it in any project. `npm i nodemon -g`

     > If you are using mac or linux you have to add `sudo` before the command. `sudo npm i nodemon -g`

2. Now, open your terminal and go to the project directory. Then, paste the command in the terminal and press enter.

3. Now, you can see the nodemon package in the package.json file.

4. Now you can use the nodemon package in your project. You can use the nodemon package in two ways.

     - You can use the nodemon package in the package.json file. You can add the nodemon package in the `scripts` section of the package.json file. Then, you can use the nodemon package by running the command `npm run dev`.

       ```json
       {
          "scripts": {
             "start": "node app.js",
             "dev": "nodemon app.js"
           },
       }
       ```


     - You can use the nodemon package in the terminal. You can use the nodemon package by running the command `nodemon app.js` or `nodemon app.js -e js,html,css` (if you want to use nodemon for multiple file types).

5. Now if you make any changes in your code, nodemon will automatically restart the server.






- Node.js is an asynchronous language.

Suppose in other language if one function is running and you call another function, the second function will wait for the first function to finish. But in Node.js, if one function is running and you call another function, the second function will not wait for the first function to finish this is called asynchronous.



> It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. This means that Node.js can handle multiple requests simultaneously without waiting for one request to complete before moving on to the next.

