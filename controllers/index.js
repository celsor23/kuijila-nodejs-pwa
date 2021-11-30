exports.getHomepage = (req, res, next) => {
  res.render("index", {pathname: req.baseUrl});
};