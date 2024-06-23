const express = require("express");
const router = express.Router();
const CommandeProduitsControllers = require ("../Controllers/CommandeProduitsControllers");

router.get("/", (req,res) => CommandeProduitsControllers.getAllCommandeProduits(req,res));
router.get("/:id" , (req,res) => CommandeProduitsControllers.getCommandeProduitsByID(req,res));

module.exports = router;