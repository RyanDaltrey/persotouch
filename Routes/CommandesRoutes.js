const express = require ('express');
const router = express.Router();
const CommandesControllers = require ("../Controllers/CommandesControllers");

router.get("/", (req,res) => CommandesControllers.getAllControllers(req,res));
router.get("/:id", (req,res) => CommandesControllers.getCommandesByID(req,res));
router.post("/", (req,res) => CommandesControllers.addCommandes(req, res));

module.exports = router;