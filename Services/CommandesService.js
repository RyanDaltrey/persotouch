const Commandes = require ("../Models/Commandes");

class CommandesService {

    async getAllCommandes(){
        return await Commandes.findAll();
    }

    async getCommandesByID(commandesID){
        return await Commandes.findByPk(commandesID);
    }
}
module.exports = new CommandesService();