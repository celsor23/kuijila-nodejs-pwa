exports.getOfflinePage = (req, res, next) => {
  res.render("offline", {pathname: req.baseUrl});
};