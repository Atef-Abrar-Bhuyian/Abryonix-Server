const app = require("./src/app");

require("dotenv").config;
const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Abryonix Server is Running on : ${port}`);
});
