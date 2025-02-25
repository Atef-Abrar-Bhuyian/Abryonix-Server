// definition
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("./middleware/logger");

// middleware
app.use(cors());
app.use(express.json());
app.use(logger);



// playground

//

app.get("/", (req, res) => {
  res.send(`Abryonix Server is Running`);
});

module.exports = app;
