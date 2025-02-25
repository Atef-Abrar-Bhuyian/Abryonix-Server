const express = require("express");
const app = express();
require("dotenv").config;
const port = process.env.port || 5000;

app.get("/", (req, res) => {
  res.send(`Abryonix Server is Running on Port: ${port}`);
});

app.listen(port, () => {
  console.log(`Abryonix Server is Running on : ${port}`);
});
