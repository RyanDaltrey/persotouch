const Clients = require ("../Models/Clients");

class ClientsService {

    async getAllClients(){
        return await Clients.findAll();
    }

    async getClientsByID(clientID){
        return await Clients.findByPk(clientID);
    }

    async addClients(clientdata){
        return await Clients.create(clientdata);
    }
}

module.exports = new ClientsService();