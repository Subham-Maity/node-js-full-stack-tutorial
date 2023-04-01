const express = require("express");
const app = express();

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

//Server
app.listen(5001);
