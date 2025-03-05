const { ObjectId } = require("mongodb");
const genrateImageUrl = require("../../utils/ai/generateImageURL");
const getImageBuffer = require("../../utils/ai/getImageBuffer");
const { imageCollection } = require("../../utils/connectDB");

const insertAiImage = async (req, res) => {
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
      thumb_iamge: data?.data?.thumb?.url,
      medium_image: data?.data?.medium?.url,
      original_image: data?.data?.url,
    };

    const result = await imageCollection.insertOne(document);
    res.send({ ...result, url: document?.original_image });
  } catch (err) {
    // console.log(err);
    res.status(500).send(err);
  }
};

const getAllImage = async (req, res) => {
  try {
    const result = await imageCollection
      .find()
      .project({
        _id: 1,
        photoURL: 1,
        displayName: 1,
        medium_image: 1,
        prompt: 1,
      })
      .toArray();
    res.send(result);
  } catch (err) {
    // console.log(err);
    res.status(500).send(err);
  }
};

const getLimitedImage = async (req, res) => {
  try {
    const result = await imageCollection
      .find()
      .project({
        _id: 1,
        photoURL: 1,
        displayName: 1,
        medium_image: 1,
        prompt: 1,
      })
      .limit(8)
      .toArray();
    res.send(result);
  } catch (err) {
    // console.log(err);
    res.status(500).send(err);
  }
};

const getSingleImage = async (req, res) => {
  try {
    const { id } = req.params;

    if (id.length != 24) {
      res.status(400).send({
        status: 400,
        message: "Please Provide a Valid ID",
      });
      return;
    }

    const result = await imageCollection.findOne({ _id: new ObjectId(id) });
    res.send(result);
  } catch (err) {
    // console.log(err);
    res.status(500).send(err);
  }
};

const getSingleUserImage = async (req, res) => {
  try {
    const { email } = req.params;

    if (!email) {
      res.status(400).send({
        status: 400,
        message: "Please Provide a Valid Email",
      });
      return;
    }

    const result = await imageCollection.find({ email }).toArray();

    // If no images are found, return a 404
    if (result.length === 0) {
      res.status(404).send({
        status: 404,
        message: "No images found for this user.",
      });
      return;
    }

    res.send(result);
  } catch (err) {
    // console.log(err);
    res.status(500).send(err);
  }
};

module.exports = {
  insertAiImage,
  getAllImage,
  getSingleImage,
  getLimitedImage,
  getSingleUserImage,
};
