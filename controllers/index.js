const { hash } = require("../helpers/hash-generator");

exports.getHomepage = (req, res, next) => {
  // const generatedHash = hash("getHomepageFirebaseJsSDKInlineScript");
  // const cspHeaders = {
  //   // "Content-Security-Policy": "script-src 'self' 'unsafe-inline';",
  //   // "Content-Security-Policy": `script-src-elem 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com/ 'nonce-64c84785f7jds78' ${generatedHash};`,
  //   // "Content-Security-Policy": `style-src-elem 'self' 'unsafe-eval' 'unsafe-inline' https://use.fontawesome.com/releases/v5.15.4/css/brands.css https://use.fontawesome.com/releases/v5.15.4/css/fontawesome.css https://fonts.googleapis.com/;`,
  //   // "Content-Security-Policy": `connect-src 'self' 'unsafe-eval' 'unsafe-inline' https://use.fontawesome.com/ https://fonts.googleapis.com/;`,
  //   "Content-Security-Policy": `default-src 'self' 'unsafe-eval' 'unsafe-inline' https://use.fontawesome.com/ https://use.fontawesome.com/ https://fonts.googleapis.com/;`,
  // }
  console.log(req.firebaseApp);
  console.log(`${req.protocol}://${req.hostname}:8080/${req.baseUrl}`);
  // res.render("index", {pathname: req.baseUrl});
  res.set("Content-Security-Policy", "script-src 'self' 'unsafe-inline';").render("index", {pathname: req.baseUrl});
  // res.set(cspHeaders).render("index", {pathname: req.baseUrl});
};