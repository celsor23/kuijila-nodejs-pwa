const express = require("express");

const router = express.Router();

const entrarController = require("../controllers/entrar");

router.get("/", entrarController.getEntrarPage);

module.exports = router;