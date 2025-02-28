require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const db = client.db("AbryonixDB");
const imageCollection = db.collection("images");
const usersCollection = db.collection("users");
const commentCollection = db.collection("comments");

async function connectDB() {
  return client.connect();
}

module.exports = { connectDB, imageCollection, usersCollection,commentCollection };
