const express = require("express");
const asyncMiddleware = require("../middlewares/async");

const router = express.Router();

const inscrevaseController = require("../controllers/inscreva-se");

router.get("/", inscrevaseController.getInscrevasePage);

router.post("/", asyncMiddleware(inscrevaseController.postInscrevasePage));

router.get("/conta", inscrevaseController.getInscrevaseContaPage);

router.post("/conta", asyncMiddleware(inscrevaseController.postInscrevaseContaPage));

router.get("/verificar", asyncMiddleware(inscrevaseController.getVerificarEmailLinkRoute));

router.post("/verificar", asyncMiddleware(inscrevaseController.postVerificarPage));

router.get("/conta/precario", inscrevaseController.getInscrevasePrecarioPage);

router.post("/conta/precario", asyncMiddleware(inscrevaseController.postInscrevasePrecarioPage));

router.get("/conta/pagamento", inscrevaseController.getInscrevasePagamentoPage);

module.exports = router;