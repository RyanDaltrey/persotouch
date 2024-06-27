const express = require ("express");
const router = express.Router();
const AutheticateController = require ("../Controllers/AuthenticateControllers");

router.post("/register" , (req, res) => AutheticateController.register(req,res));

module.exports = router;