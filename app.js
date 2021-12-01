const express = require("express");
const { initializeApp, cert } = require("firebase-admin/app");
const helmet = require("helmet");
const compression = require("compression");
const path = require("path");
require("dotenv").config();

const app = express();

const firebaseApp = initializeApp({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
  })
});

const homepageRoutes = require("./routes/index");
const entrarRoutes = require("./routes/entrar");
const inscrevaseRoutes = require("./routes/inscreva-se");

app.set("views", path.join( __dirname, "views"));
app.set("view engine", "ejs");

app.use(helmet());
app.use(compression());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join( __dirname, "public")));

app.use((req, res, next) => {
  req.firebaseApp = firebaseApp;
  next();
});

app.use(homepageRoutes);
app.use("/entrar", entrarRoutes);
app.use("/inscreva-se", inscrevaseRoutes);

app.all("*", (req, res, next) => {
  res.render("404", {pathname: req.path});
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});