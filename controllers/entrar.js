exports.getEntrarPage = (req, res, next) => {

  res.render("entrar", {pathname: req.baseUrl});
};