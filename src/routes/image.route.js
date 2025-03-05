const express = require("express");
const {
  insertAiImage,
  getAllImage,
  getSingleImage,
  getLimitedImage,
  getSingleUserImage,
} = require("../controllers/image.controller");
const imageRouter = express.Router();

imageRouter.post("/create", insertAiImage);
imageRouter.get("/all", getAllImage);
imageRouter.get("/limitedImages", getLimitedImage);
imageRouter.get("/singleImage/:id", getSingleImage);
imageRouter.get("/userImages/:email", getSingleUserImage);

module.exports = imageRouter;
