const express = require ('express');
const router = express.Router();
const CommandeControllers = require ("../Controllers/CommandeControllers");

router.get("/", (req,res) => CommandeControllers.getAllControllers(req,res));
router.get("/:id", (req,res) => CommandeControllers.getCommandeByID(req,res));
router.post("/", (req,res) => CommandeControllers.addCommande(req, res));
router.patch("/:id", (req, res) => CommandeControllers.updateCommande(req, res));
router.delete("/:id" , (req, res) => CommandeControllers.deleteCommande(req,res));

module.exports = router;