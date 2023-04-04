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
