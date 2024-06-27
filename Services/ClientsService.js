const { where } = require("sequelize");
const Clients = require ("../Models/Clients");

class ClientsService {

    async getAllClients(){
        return await Clients.findAll({ include : "commandesFK"});
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

    async  deleteClients(clientID,){
        return await Clients.destroy({
            where : {id_client : clientID}
        })
    }
}

module.exports = new ClientsService();