const { createHash } = require("crypto");

exports.hash = (string) => {
  return createHash("sha256").update(string).digest('hex');
};