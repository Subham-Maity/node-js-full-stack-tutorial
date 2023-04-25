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
