const express = require("express");
const error = require("./middlewares/error");
const mongoose = require("mongoose");
const helmet = require("helmet");
const compression = require("compression");
const path = require("path");
require("dotenv").config();

const app = express();

const homepageRoutes = require("./routes/index");
const entrarRoutes = require("./routes/entrar");
const inscrevaseRoutes = require("./routes/inscreva-se");
const offlineRoutes = require("./routes/offline");

const { setCORSAndCSPHeadersMiddleware } = require("./middlewares/cors_and_csp_headers");

app.set("views", path.join( __dirname, "views"));
app.engine('html', require('ejs').renderFile);
app.set("view engine", "html");

app.use(helmet());
app.use(compression());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join( __dirname, "public")));

app.use(setCORSAndCSPHeadersMiddleware);

app.use(homepageRoutes);
app.use("/entrar", entrarRoutes);
app.use("/inscreva-se", inscrevaseRoutes);
app.use("/offline", offlineRoutes);

app.use("*", (req, res, next) => {
  res.status(404).render("404", {pathname: req.path});
});

app.use(error);

const port = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB...");
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch(err => console.log("Could not connect to MongoDB...", err));