const express = require("express");
const {
  insertAiImage,
  getAllImage,
  getSingleImage,
  getLimitedImage,
} = require("../controllers/image.controller");
const imageRouter = express.Router();

imageRouter.post("/create", insertAiImage);
imageRouter.get("/all", getAllImage);
imageRouter.get("/limitedImages", getLimitedImage);
imageRouter.get("/singleImage/:id", getSingleImage);

module.exports = imageRouter;
