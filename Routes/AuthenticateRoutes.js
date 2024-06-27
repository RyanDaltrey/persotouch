const express = require ("express");
const router = express.Router();
const AutheticateController = require ("../Controllers/AuthenticateControllers");

router.post("/register" , (req, res) => AutheticateController.register(req,res));
router.post("/login", (req,res) => AutheticateController.login(req,res));
module.exports = router;