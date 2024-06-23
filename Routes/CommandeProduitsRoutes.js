const express = require("express");
const router = express.Router();
const CommandeProduitsControllers = require ("../Controllers/CommandeProduitsControllers");

router.get("/", (req,res) => CommandeProduitsControllers.getAllCommandeProduits(req,res));
router.get("/:id" , (req,res) => CommandeProduitsControllers.getCommandeProduitsByID(req,res));
router.post("/" , (req,res) => CommandeProduitsControllers.addCommandeProduits(req,res));
router.patch("/:id", (req,res) => CommandeProduitsControllers.updateCommandeProduis(req,res));

module.exports = router;