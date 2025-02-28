const generateAiReply = require("../../utils/ai/generateAiReply");
const { commentCollection } = require("../../utils/connectDB");

const postUserComment = async (req, res) => {
  const { imageId, prompt, userEmail, photoURL, comment } = req.body;

  if (!imageId || !prompt || !userEmail || !photoURL || !comment) {
    res.status(400).send({
      status: 400,
      message:
        "Please Provide imageId, prompt, user Email, user photo properly",
    });
    return;
  }

  const reply = await generateAiReply(prompt, comment);
  const document = {
    prompt,
    imageId,
    userEmail,
    photoURL,
    comment,
    createdAt: new Date().toISOString(),
    reply,
  };
  const result = commentCollection.insertOne(document);
  res.send({ ...result, reply });
};

module.exports = { postUserComment };
