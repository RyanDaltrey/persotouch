const express = require ('express');
const CategoriesController = require ("../Controllers/CategoriesControllers");
const router = express.Router();

router.get("/", (req,res) => CategoriesController.getAllCategories(req,res));
router.get("/:id", (req, res) => CategoriesController.getCategoriesByID(req,res));
module.exports = router;