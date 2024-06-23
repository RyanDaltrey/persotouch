const AvisController = require ('../Controllers/AvisControllers');
const express = require ('express');
const router = express.Router();

router.get("/", (req,res) => AvisController.getAllAvis(req,res));
router.get("/:id" , (req,res) => AvisController.getAvisByID(req,res));

module.exports = router;