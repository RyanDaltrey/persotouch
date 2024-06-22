const ClientsControllers = require ("../Controllers/ClientsControllers");
const express = require ("express");
const router = express.Router();

router.get("/" , (req,res) => ClientsControllers.getAllClients(req,res));
router.get("/:id" , (req,res) => ClientsControllers.getClientsByID(req,res));
router.post("/" , (req,res) => ClientsControllers.addClients(req,res));
router.patch("/:id", (req,res) => ClientsControllers.updateClients(req,res));
router.delete("/:id", (req,res) => ClientsControllers.deleteClients(req,res));

module.exports = router;