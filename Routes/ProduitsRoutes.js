const express = require ("express");
const router = express.Router();
const ProduitsControllers = require ("../Controllers/ProduitsControllers");

router.get("/", (req,res) => ProduitsControllers.getAllProduits(req,res));

module.exports = router;