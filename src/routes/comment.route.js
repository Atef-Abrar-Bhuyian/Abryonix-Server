const express = require("express");
const { postUserComment } = require("../controllers/comment.controller");
const commentRouter = express.Router();

commentRouter.get("/image/:imageId", (req, res) => {
  res.send(`Fetching comments for image: ${req.params.imageId}`);
});

commentRouter.post("/createComment", postUserComment);

module.exports = commentRouter; 
