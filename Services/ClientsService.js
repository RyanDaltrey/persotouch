const Clients = require ("../Models/Clients");

class ClientsService {

    async getAllClients(){
        return await Clients.findAll();
    }
}

module.exports = new ClientsService();