const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

app.set("views", path.join( __dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join( __dirname, "public")));

app.get("/", (req, res, next) => {
  res.render("index");
});

const port = process.env.PORT;

app.listen(8080, () => {
  console.log(`Server started on port ${port}`);
});