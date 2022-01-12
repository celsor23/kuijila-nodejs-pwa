exports.setCORSAndCSPHeadersMiddleware = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // res.setHeader("Content-Security-Policy", `default-src *; script-src 'self' 'unsafe-inline' https://www.gstatic.com/ nonce-64c84785f7jds78 https://www.googletagmanager.com/; style-src 'self';`);
  next();
};