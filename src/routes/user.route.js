const express = require("express");
const userInsertDb = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.post("/user", userInsertDb);

module.exports = userInsertDb;
