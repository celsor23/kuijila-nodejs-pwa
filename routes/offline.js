const express = require("express");

const router = express.Router();

const offlineControllers = require("../controllers/offline");

router.get("/", offlineControllers.getOfflinePage);

module.exports = router;