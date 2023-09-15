const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const mongoUrl = `mongodb+srv://${username}:${password}@cluster0.gaqbxb5.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
const person = require("./routes/person");

const dbConnect = async () => {
  await mongoose
    .connect(mongoUrl)
    .then(() => {
      console.log("Connected Successfully to MongoDBAtlas");
    })
    .catch((err) => {
      console.log("Not able to connect to DB!!!", err.message);
      process.exit(1);
    });
};

app.use(express.json());
app.use("/api", person);
const port = process.env.PORT || 4040;
dbConnect();

app.listen(port, () => console.log("Server is Listening on Port " + port));
