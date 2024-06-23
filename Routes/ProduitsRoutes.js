const express = require ("express");
const router = express.Router();
const ProduitsControllers = require ("../Controllers/ProduitsControllers");

router.get("/", (req,res) => ProduitsControllers.getAllProduits(req,res));
router.get("/:id", (req,res) => ProduitsControllers.getProduitsByID(req,res));
router.post("/" , (req,res) => ProduitsControllers.addProduits(req,res));

module.exports = router;