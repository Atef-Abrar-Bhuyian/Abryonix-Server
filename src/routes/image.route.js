const express = require("express");
const getImageBuffer = require("../../utils/ai/getImageBuffer");
const genrateImageUrl = require("../../utils/ai/generateImageURL");
const { imageCollection } = require("../../utils/connectDB");
const imageRouter = express.Router();

imageRouter.post("/create-image", async (req, res) => {
  const { prompt, category, email, displayName, photoURL } = req.body;

  if (!email || !prompt || !category || !displayName || !photoURL) {
    res.status(400).send({
      status: 400,
      message: "Please Provide prompt, category, email, displayName, photoURL",
    });
    return;
  }

  try {
    const buffer = await getImageBuffer(prompt, category);
    const data = await genrateImageUrl(buffer, prompt);

    const document = {
      email,
      displayName,
      photoURL,
      prompt,
      category,
      createdAt: new Date().toISOString,
      thumb_iamge: data?.data?.thumb?.url,
      medium_image: data?.data?.medium?.url,
      original_image: data?.data?.url,
    };

    const result = await imageCollection.insertOne(document);
    res.send({ ...result, url: document?.original_image });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = imageRouter;
