const express = require ('express');
const router = express.Router();
const AvisControllers = require('../Controllers/AvisControllers');

router.get("/", (req,res) => AvisControllers.getAllAvis(req,res));
router.get("/:id" , (req,res) => AvisControllers.getAvisByID(req,res));
router.post("/", (req,res) => AvisControllers.addAvis(req,res));
router.patch("/:id" , (req,res) => AvisControllers.updateAvis(req,res));
router.delete("/:id", (req,res) => AvisControllers.deleteAvis(req,res));

module.exports = router;