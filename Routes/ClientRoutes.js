const ClientControllers = require ("../Controllers/ClientControllers");
const express = require ("express");
const router = express.Router();

router.get("/" , (req,res) => ClientControllers.getAllClients(req,res));
router.get("/:id" , (req,res) => ClientControllers.getClientByID(req,res));
router.post("/" , (req,res) => ClientControllers.addClient(req,res));
router.patch("/:id", (req,res) => ClientControllers.updateClient(req,res));
router.delete("/:id", (req,res) => ClientControllers.deleteClient(req,res));

module.exports = router;