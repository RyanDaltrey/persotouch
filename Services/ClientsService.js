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

    async updateClients(clientID, client){
        return await Clients.update (client,{
            where : {id_client : clientID},
            individualHooks : true
        })
    }
}

module.exports = new ClientsService();