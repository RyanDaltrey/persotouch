const AvisController = require ('../Controllers/AvisControllers');
const express = require ('express');
const router = express.Router();

router.get("/", (req,res) => AvisController.getAllAvis(req,res));

module.exports = router;