const express = require("express");
const { postUserComment } = require("../controllers/comment.controller");
const { commentCollection } = require("../../utils/connectDB");
const commentRouter = express.Router();

commentRouter.get("/image/:imageId", async (req, res) => {
  try {
    const {imageId} = req.params;
    const comments = await commentCollection
      .find({ imageId: imageId })
      .toArray();
    res.send(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

commentRouter.post("/createComment", postUserComment);

module.exports = commentRouter;
