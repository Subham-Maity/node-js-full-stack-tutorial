
## ⭐ Let's render HTML

<p align="center">
  <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
    src="https://media.giphy.com/media/26FxFLIRsjweMvsnS/giphy.gif"
  />
</p>


```js
const express = require("express");
const app = express();
//Home Page
app.get(`/`, (req, res) => {
console.log("Data send by the client: ", req.query.id);
  res.send("This is our main Page");
});
//Server
  app.listen(5001);
```

1 You can simply add `h1` tag to the `res.send()` function to render HTML pages.

```js
const express = require("express");
const app = express();
//Home Page
app.get(`/`, (req, res) => {
console.log("Data send by the client: ", req.query.id);
  res.send("<h1>This is our main Page</h1>");
});
//Server
  app.listen(5001);
```



2. Suppose you want take an input from the user on the about page you can do it like this

```js
const express = require("express");
const app = express();

//Home Page
app.get(`/`, (req, res) => {
console.log("Data send by the client: ", req.query.id);
  res.send("<h1>This is our main Page</h1>");
});

//About Page
app.get(`/about`, (req, res) => {
  res.send(`
  <input type="text" placeholder="Enter your name" />
    <button>Submit</button>
    `);
});

//Server
app.listen(5001);
```

3. If you want to show json data on the `data` page you can do it like this

```js
const express = require("express");
const app = express();

//Home Page
app.get(`/`, (req, res) => {
  console.log("Data send by the client: ", req.query.id);
  res.send("<h1>This is our main Page</h1>");
});

//About Page
app.get(`/about`, (req, res) => {
  res.send(`
  <input type="text" placeholder="Enter your name" />
    <button>Submit</button>
    `);
});

//Data Page

app.get(`/data`, (req, res) => {
  res.send({
    name: "Subham Maity",
    age: 16,
    country: "India",
  });
});

//Server

app.listen(5001);

```


- You can also use multiple objects in the `res.send()` function

```js
const express = require("express");
const app = express();

//Home Page
app.get(`/`, (req, res) => {
  console.log("Data send by the client: ", req.query.id);
  res.send("<h1>This is our main Page</h1>");
});

//About Page
app.get(`/about`, (req, res) => {
  res.send(`
  <input type="text" placeholder="Enter your name" />
    <button>Submit</button>
    `);
});

//Data Page

app.get(`/data`, (req, res) => {
  res.send([
    {
      name: "Subham Maity",
      age: 16,
      country: "India",
    },
    {
      name: "Raj Sharma",
      age: 17,
      country: "India",
    },
  ]);
});

//Server

app.listen(5001);

```


4. Suppose You want jump `home` page to `about` page you can do it like this

```js
const express = require("express");
const app = express();

//Home Page
app.get(`/`, (req, res) => {
  console.log("Data send by the client: ", req.query.id);
  res.send("<h1>This is our main Page</h1> <a href='/about'>About</a>");
});

//About Page
app.get(`/about`, (req, res) => {
  res.send(`
  <input type="text" placeholder="Enter your name" />
    <button>Submit</button>
    <a href="/">Home</a>
    `);
});

//Data Page

app.get(`/data`, (req, res) => {
  res.send([
    {
      name: "Subham Maity",
      age: 16,
      country: "India",
    },
    {
      name: "Raj Sharma",
      age: 17,
      country: "India",
    },
  ]);
});

//Server

app.listen(5001);

```
> Use `href` attribute to jump from one page to another page


5. If you want to set parameters in the url
> suppose you hit `localhost:5001/about?name=Subham` and you want to get the name of the user in the input field you can do it like this


```js

const express = require("express");
const app = express();

//Home Page
app.get(`/`, (req, res) => {
  console.log("Data send by the client: ", req.query.id);
  res.send("<h1>This is our main Page</h1> <a href='/about'>About</a>");
});

//About Page
app.get(`/about`, (req, res) => {
  res.send(`
  <input type="text" placeholder="Enter your name" value="${req.query.name}" />
    <button>Submit</button>
    <a href="/">Home</a>
    `);
});

//Data Page

app.get(`/data`, (req, res) => {
  res.send([
    {
      name: "Subham Maity",
      age: 16,
      country: "India",
    },
    {
      name: "Raj Sharma",
      age: 17,
      country: "India",
    },
  ]);
});

//Server

app.listen(5001);

```
> Use `req.query` to get the parameters from the url and use `value` attribute to set the value of the input field to the parameter value
> You can learn more about `req.query` [here](https://expressjs.com/en/api.html#req.query)

### ⚡ query

**Step 1: Making a GET request with query string parameters**
- When you make a GET request to a URL that includes query string parameters, the parameters are included in the URL after a `?` symbol. For example, if you want to make a GET request to the `/about` page and pass the `name` parameter with the value `"Subham"`, the URL would be `localhost:5001/about?name=Subham`.
- In this example, the query string is `name=Subham`.

**Step 2: Accessing query string parameters in Express.js**
- In an Express.js application, you can access the query string parameters of a GET request using the `req.query` property. This property is an object that contains the query string parameters as key-value pairs.
- In our example, if you make a GET request to `localhost:5001/about?name=Subham`, the `req.query` object will contain the property `name` with the value `"Subham"`.

**Step 3: Using query string parameters to set the value of an input field**
- You can use the value of a query string parameter to set the value of an input field on your page. To do this, you need to set the `value` attribute of the input field to the value of the query string parameter.
- In our example, if you want to set the value of an input field on the `/about` page to the value of the `name` parameter passed in the URL, you can do this by setting the `value` attribute of the input field to `${req.query.name}`.

Here's an example that shows how this works:

```js
app.get(`/about`, (req, res) => {
  res.send(`
    <input type="text" placeholder="Enter your name" value="${req.query.name}" />
    <button>Submit</button>
    <a href="/">Home</a>
  `);
});
```

In this code, we have an Express.js route for handling GET requests to the `/about` page. When a GET request is made to this page, we send back an HTML response that includes an input field. The `value` attribute of this input field is set to `${req.query.name}`, which means that it will be pre-populated with the value of the `name` parameter passed in the URL.






