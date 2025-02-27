const express = require("express");
const {insertAiImage, getAllImage, getSingleImage} = require("../controllers/image.controller");
const imageRouter = express.Router();

imageRouter.post("/create", insertAiImage);
imageRouter.get("/all",getAllImage);
imageRouter.get("/singleImage/:id",getSingleImage);

module.exports = imageRouter;
