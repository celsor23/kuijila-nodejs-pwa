exports.getHomepage = (req, res, next) => {
  console.log(req.firebaseApp);
  res.render("index", {pathname: req.baseUrl});
};