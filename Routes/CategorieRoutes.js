const express = require ('express');
const router = express.Router();
const CategorieControllers = require ("../Controllers/CategorieControllers");

router.get("/", (req,res) => CategorieControllers.getAllCategories(req,res));
router.get("/:id", (req, res) => CategorieControllers.getCategorieByID(req,res));
router.post("/", (req,res) => CategorieControllers.addCategorie(req,res));
router.patch("/:id", (req,res) => CategorieControllers.updateCategorie(req,res));
router.delete("/:id", (req,res) => CategorieControllers.deleteCategorie(req,res));

module.exports = router; 

