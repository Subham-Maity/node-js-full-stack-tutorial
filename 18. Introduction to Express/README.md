## ⭐ Introduction

<p align="center">
                <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                src="https://media.giphy.com/media/uBuzWfwVcadRC/giphy.gif"
               />
     </p>



What is Express js ?

Here's a simple way to think about the difference between Express.js and Node.js:

- Express.js is like a house. It provides the structure and foundation that you need to build your web application.
- Node.js is like the land that the house is built on. It provides the underlying infrastructure that allows Express.js to work.
Without Express.js, you could still build a web application using Node.js, but it would be much more difficult and time-consuming. Express.js provides a number of features that make it much easier to build web applications, such as routing, templating, and error handling.



### What is Express.js?
Express.js is a minimal and flexible NodeJS framework that provides a robust set of features for web applications like routing, sessions, caching, etc. It makes it easier to organize your application’s functionality with middleware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.

### How does it differ from Node.js?
Node.js is a run-time environment for building server-side event-driven i/o application using javascript. Express.js is a framework based on node.js for building web-application using principles and approaches of node.js. In simpler terms, express.js makes handling API requests and server management easier than using only node.js.

### Benefits of using Express.js over Node.js
- Provides a simpler interface to build your routes and then use them for handling requests made by the users.
- Manages all the clutter that comes with setting up a server.



## ⭐ How to install Express js ?


1. **Install Node.js**: Before installing Express.js, you need to have Node.js installed on your computer. You can download the installer from the [official Node.js website](https://nodejs.org/en/download/).

2. **Create a new project**: Open your command line interface (CLI) and navigate to the directory where you want to create your new project. Then, run the following command to create a new directory for your project and navigate into it:
```
 mkdir myapp
 cd myapp
```

3. **Initialize your project**: In the `myapp` directory, run the following command to initialize your project and create a `package.json` file:
```
 npm init
```
 Follow the prompts to enter information about your project.

4. **Install Express.js**: In the `myapp` directory, run the following command to install Express.js and save it as a dependency in your `package.json` file:
```
 npm install express --save
```

5. **Create an Express.js app**: In the `myapp` directory, create a new file called `app.js`. This file will contain the code for your Express.js app. Here is some sample code to get you started:
```javascript
// Require the express module, which is a web framework for Node.js
const express = require('express');
// Create an app object by calling the express function
const app = express();

// Define a route handler for the root path ('/')
app.get('/', function (req, res) {
  // Use the res object to send a text message 'Hello World!' back to the client
  res.send('Hello World!');
});

// Tell the app to listen on port 3000
app.listen(3000, function () {
  // Log a message 'Example app listening on port 3000!' to the terminal when the app starts listening
  console.log('Example app listening on port 3000!');
});
```

6. **Run your app**: In the CLI, navigate to the `myapp` directory and run the following command to start your app:
```
node app.js
```
You should see a message that says "Example app listening on port 3000!".

7. **Test your app**: Open your web browser and navigate to `http://localhost:3000`. You should see a message that says "Hello World!".

That's it! You have successfully installed Express.js and created a simple app.



## ⭐ Let's Create Basic



1. We need to import `express` module in our project.
```js
const express = require("express")
```
2. We need to create a express app.
```js
const app = express()
```
3. We need to create a route for our app.
> - `get`, `post`, `put`, `delete` are the methods used to create a route for our app.
> - get() method is used to create a route for our app and it takes two arguments first is the route and second is the callback function which will be executed when the route is accessed by the user.
> - The get() method is used to create a route for a GET request. A GET request is a type of HTTP request that is used to retrieve data from a server. In this case, we are telling Express.js to return the message "Hello World!" when a user visits the URL /.
> - The callback function takes two arguments first is the request object and second is the response object. The request object contains the information about the request made by the user and the response object contains the information about the response that will be sent to the user.
> - send() method is used to send the response to the user.

```js
//Home Page
app.get(`/`, (req, res) => {
  res.send("This is our main Page");
});

//About Page
app.get(`/about`, (req, res) => {
  res.send("This is our about Page");
});

//Contact Page
app.get(`/contact`, (req, res) => {
  res.send("This is our contact Page");
});
```
4. We need to listen to the port for our app.
>  - listen() method is used to listen to the port for our app and it takes two arguments first is the port number and second is the callback function which will be executed when the port is listening.

```js
//Server
app.listen(5001);
```
> You can simply pass the port number as an argument to the listen() method.

5. Now we need to run our app.
```bash
node app.js
```
6. Go to the browser
- Now open your browser and type `http://localhost:5001` in the address bar and press enter you will see the message `This is our main Page` on the screen.
- Now type `http://localhost:5001/about` in the address bar and press enter you will see the message `This is our about Page` on the screen.
- Now type `http://localhost:5001/contact` in the address bar and press enter you will see the message `This is our contact Page` on the screen.


