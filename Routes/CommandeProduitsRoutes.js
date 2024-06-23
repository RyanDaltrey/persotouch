const express = require("express");
const router = express.Router();
const CommandeProduitsControllers = require ("../Controllers/CommandeProduitsControllers");

router.get("/", (req,res) => CommandeProduitsControllers.getAllCommandeProduits(req,res));

module.exports = router;