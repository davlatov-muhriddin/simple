const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

app.use(express.json());

app.use("/api/users/", require("./router/user"));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log("connected db"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server is running");
});
