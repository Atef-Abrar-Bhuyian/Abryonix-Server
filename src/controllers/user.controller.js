const { usersCollection } = require("../../utils/connectDB");

const userInsertDb = async (req, res) => {
  const user = req.body;
  const query = { email: user.email };
  const existingUser = await usersCollection.findOne(query);

  if (existingUser) {
    return res.send({ message: "User Already Exists", insertedId: null });
  }

  const result = await usersCollection.insertOne(user);
  res.send(result);
};

module.exports = userInsertDb;
