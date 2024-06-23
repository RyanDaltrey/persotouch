const AvisController = require ('../Controllers/AvisControllers');
const express = require ('express');
const router = express.Router();

router.get("/", (req,res) => AvisController.getAllAvis(req,res));
router.get("/:id" , (req,res) => AvisController.getAvisByID(req,res));
router.post("/", (req,res) => AvisController.addAvis(req,res));
router.patch("/:id" , (req,res) => AvisController.updateAvis(req,res));
router.delete("/:id", (req,res) => AvisController.deleteAvis(req,res));
module.exports = router;