const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);

//CRUD
app.get("/", (req, res) => {
  res.send("Welcome our Chat App's Api");
});

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
  console.log(`Server Running on port ${port}`);
});

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Connection Established");
  })
  .catch((error) => {
    console.log("MongoDB Connection Failed", error.message);
  });
