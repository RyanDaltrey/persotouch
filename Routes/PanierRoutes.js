const express = require ("express");
const router = express.Router();
const PanierControllers = require("../Controllers/PanierControllers");

router.get("/", (req,res) => PanierControllers.getAllPaniers(req,res));
router.get("/:id", (req,res) => PanierControllers.getPanierByID(req,res));
router.post("/", (req,res) => PanierControllers.addPanier(req,res));
router.patch("/:id", (req,res) => PanierControllers.updatePanier(req,res));
router.delete("/:id", (req,res) => PanierControllers.deletePanier(req,res));

module.exports = router;