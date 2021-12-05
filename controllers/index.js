const { hash } = require("../helpers/hash-generator");

exports.getHomepage = (req, res, next) => {
  const generatedHash = hash("getHomepageFirebaseJsSDKInlineScript");
  const cspHeaders = {
    "Content-Security-Policy": "script-src 'self' 'unsafe-inline';",
    "Content-Security-Policy": `script-src-elem 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com/ 'nonce-64c84785f7jds78' ${generatedHash};`
  }
  console.log(req.firebaseApp);
  console.log(`${req.protocol}://${req.hostname}:8080/${req.baseUrl}`);
  res.set(cspHeaders).render("index", {pathname: req.baseUrl});
};