const express = require ('express');
const CategoriesController = require ("../Controllers/CategoriesControllers");
const router = express.Router();

router.get("/", (req,res) => CategoriesController.getAllCategories(req,res));
router.get("/:id", (req, res) => CategoriesController.getCategoriesByID(req,res));
router.post("/", (req,res) => CategoriesController.addCategories(req,res));
router.patch("/:id", (req,res) => CategoriesController.updateCategories(req,res));
router.delete("/:id", (req,res) => CategoriesController.deleteCategories(req,res));
module.exports = router; 