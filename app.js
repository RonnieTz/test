const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Server open at port 3000");
});

app.get("/", (req, res) => {
  res.render("index");
});

mongoose.connect("mongodb://127.0.0.1/myDatabase", (err) => {
  if (err) {
    console.log(err);
  } else console.log("Connected to database.");
});
