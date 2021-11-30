const express = require("express");

const router = express.Router();

const inscrevaseController = require("../controllers/inscreva-se");

router.get("/", inscrevaseController.getInscrevasePage);

module.exports = router;