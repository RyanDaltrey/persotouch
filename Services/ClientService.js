const { where } = require("sequelize");
const Client = require ("../Models/Client");

class ClientService {

    async getAllClients(){
        return await Client.findAll({ include : "commandesFK"});
    }

    async getClientByID(clientID){
        return await Client.findByPk(clientID);
    }

    async addClient(clientdata){
        return await Client.create(clientdata);
    }

    async updateClient(clientID, client){
        return await Client.update (client,{
            where : {id_client : clientID},
            individualHooks : true
        })
    }

    async  deleteClient(clientID,){
        return await Client.destroy({
            where : {id_client : clientID}
        })
    }
}

module.exports = new ClientsService();