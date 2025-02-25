const app = require("./src/app");
const connectDB = require("./utils/connectDB");

require("dotenv").config();
const port = process.env.port || 5000;

// connect database
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Abryonix Server is Running on : ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
