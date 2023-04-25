
## ⭐ Remove Extension

In the previous section, we learned how to render html static page using express static middleware to serve the static files from the public folder. In this section, we will learn how to remove the extension from the URL.

### What is the exact problem?

The main problem is that we have to write the extension of the file in the URL. For example, if we want to access the index.html file, we have to write the URL as `http://localhost:3000/index.html`. But we want to access the index.html file using the URL `http://localhost:3000/index.`


### How to solve the problem?

We simply use get method of express to render the html file. We will use the `res.sendFile()` method to render the html file. The `res.sendFile()` method takes the path of the file as the first argument.

- Something like this:
```js
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
```
This code looks like this:

```js
const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");


// app.use(express.static(publicPath));//We don't use this 

//We use this instead of the above line
app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.listen(5001);
```
- Here "/about" is the path of the about.html file. We can use any path we want. For example, we can use "/about-us" instead of "/about" as the path of the about.html file.

- Now, we can access the about.html file using the URL `http://localhost:5001/about`. We don't have to write the extension of the file in the URL.

- We will use sendFile() method to render the html file. We don't use send() method to render the html file because send() method will send the html file as a string. But we want to send the html file as a file.

- publicPath is the path of the public folder. We will use this path to render the html file.
- and /about.html is the path of the about.html file. We will use this path to render the html file.

#### If you want to add multiple endpoints, you can do it like this:

```js
const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/contact", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.listen(5001);
```
- Here, we have added three endpoints. We can add as many endpoints as we want. 


## ⭐ Default Page

Suppose user type wrong URL in the browser. For example, if user type `http://localhost:5001/abou` in the browser, then the browser will show the error message "Cannot GET /abou". We want to show the default page if the user type wrong URL in the browser. 

You can simply use `*` as the path of the default page. For example, if we want to show the default page if the user type wrong URL in the browser, then we can use `*` as the path of the default page. 

```js
const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/contact", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

//Default page
app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.listen(5001);
```

- Now, if the user type wrong URL in the browser, then the browser will show the default page.

## ⭐ 404 Page
- Go to public folder and create a new file called 404.html. This file will be our 404 page.

```html
<!DOCTYPE html>
<html>

<head>
    <title>404 Error - Page Not Found</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 16px;
            color: #333;
            background-color: #f2f2f2;
            text-align: center;
            margin: 0;
            padding: 0;
        }

        .container {
            margin: 50px auto;
            max-width: 600px;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        }

        h1 {
            font-size: 36px;
            margin-bottom: 20px;
        }

        p {
            font-size: 18px;
            margin-bottom: 20px;
        }

        a {
            color: #007bff;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>404 Error - Page Not Found</h1>
        <p>Oops! Looks like the page you're trying to access doesn't exist.</p>
        <p>Please check the URL and try again or go back to the <a href="/">homepage</a>.</p>
    </div>
</body>

</html>
```

Now in the index.js file, we will use same `*` as the path of the 404 page.

```js
const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/contact", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

//Default page
app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/404.html`);
});

app.listen(5001);
```
- This is how we can create a 404 page in express.
