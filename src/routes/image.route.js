const express = require("express");
const {insertAiImage, getAllImage} = require("../controllers/image.controller");
const imageRouter = express.Router();

imageRouter.post("/create", insertAiImage);
imageRouter.get("/all",getAllImage);

module.exports = imageRouter;
