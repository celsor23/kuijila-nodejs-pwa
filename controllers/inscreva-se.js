exports.getInscrevasePage = (req, res, next) => {
  res.render("inscreva-se", {pathname: req.baseUrl});
};