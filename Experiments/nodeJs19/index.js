const express = require("express");
const app = express();

//Home Page
app.get(`/`, (req, res) => {
  console.log("Data send by the client: ", req.query.id);
  res.send("This is our main Page");
});

//Server
app.listen(5001);


