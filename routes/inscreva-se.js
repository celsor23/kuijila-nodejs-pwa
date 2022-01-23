const express = require("express");

const router = express.Router();

const inscrevaseController = require("../controllers/inscreva-se");

router.get("/", inscrevaseController.getInscrevasePage);

router.post("/", inscrevaseController.postInscrevasePage);

router.get("/conta", inscrevaseController.getInscrevaseContaPage);

router.post("/conta", inscrevaseController.postInscrevaseContaPage);

router.get("/verificar", inscrevaseController.getVerificarEmailLinkRoute);

router.get("/conta/precario", inscrevaseController.getInscrevasePrecarioPage);

router.post("/conta/precario", inscrevaseController.postInscrevasePrecarioPage);

router.get("/conta/pagamento", inscrevaseController.getInscrevasePagamentoPage);

module.exports = router;