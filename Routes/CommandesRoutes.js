const express = require ('express');
const router = express.Router();
const CommandesControllers = require ("../Controllers/CommandesControllers");

router.get("/", (req,res) => CommandesControllers.getAllControllers(req,res));

module.exports = router;