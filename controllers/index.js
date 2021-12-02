exports.getHomepage = (req, res, next) => {
  console.log(req.firebaseApp);
  console.log(`${req.protocol}://${req.hostname}:8080/${req.baseUrl}`);
  res.render("index", {pathname: req.baseUrl});
};