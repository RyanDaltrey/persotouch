const ClientsControllers = require ("../Controllers/ClientsControllers");
const express = require ("express");
const router = express.Router();

router.get("/" , (req,res) => ClientsControllers.getAllClients(req,res));
router.get("/:id" , (req,res) => ClientsControllers.getClientsByID(req,res));

module.exports = router;