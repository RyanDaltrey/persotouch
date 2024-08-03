const express = require ("express");
const router = express.Router();
const ProduitControllers = require ("../Controllers/ProduitControllers");

router.get("/", (req,res) => ProduitControllers.getAllProduits(req,res));
router.get("/:id", (req,res) => ProduitControllers.getProduitByID(req,res));
router.post("/" , (req,res) => ProduitControllers.addProduit(req,res));
router.patch("/:id", (req,res) => ProduitControllers.updateProduit(req,res));
router.delete("/:id", (req,res) => ProduitControllers.deleteProduit(req,res));

module.exports = router;