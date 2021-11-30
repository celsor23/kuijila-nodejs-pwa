const express = require("express");

const router = express.Router();

const homepageControllers = require("../controllers/index");

router.get("/", homepageControllers.getHomepage);

module.exports = router;