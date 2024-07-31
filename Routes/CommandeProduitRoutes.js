const express = require("express");
const router = express.Router();
const CommandeProduitControllers = require ("../Controllers/CommandeProduitControllers");

router.get("/", (req,res) => CommandeProduitControllers.getAllCommandeProduits(req,res));
router.get("/:id" , (req,res) => CommandeProduitControllers.getCommandeProduitByID(req,res));
router.post("/" , (req,res) => CommandeProduitControllers.addCommandeProduit(req,res));
router.patch("/:id", (req,res) => CommandeProduitControllers.updateCommandeProduit(req,res));
router.delete("/:id", (req,res) => CommandeProduitControllers.deleteCommandeProduit(req,res));

module.exports = router;