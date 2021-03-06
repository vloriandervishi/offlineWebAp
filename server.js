const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
require("dotenv").config();
// added stuff
const PORT = process.env.PORT || 3001;
//const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/localbudget";  ss

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
 const isDev=process.env.NODE_ENV === "development"? process.env.MONGODB_URI: process.env.MONGODB_URI;


mongoose.connect(isDev, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology:true
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});