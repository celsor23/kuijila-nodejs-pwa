const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

const homepageRoutes = require("./routes/index");
const entrarRoutes = require("./routes/entrar");
const inscrevaseRoutes = require("./routes/inscreva-se");

app.set("views", path.join( __dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join( __dirname, "public")));

app.use(homepageRoutes);
app.use("/entrar", entrarRoutes);
app.use("/inscreva-se", inscrevaseRoutes);

app.all("*", (req, res, next) => {
  res.render("404", {pathname: req.path});
});

const port = process.env.PORT;

app.listen(8080, () => {
  console.log(`Server started on port ${port}`);
});