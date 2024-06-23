const express = require ("express");
const router = express.Router();
const PaniersControllers = require("../Controllers/PaniersControllers");

router.get("/", (req,res) => PaniersControllers.getAllPaniers(req,res));
router.get("/:id", (req,res) => PaniersControllers.getPaniersByID(req,res));
router.post("/", (req,res) => PaniersControllers.addPaniers(req,res));


module.exports = router;