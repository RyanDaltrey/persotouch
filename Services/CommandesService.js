const Commandes = require ("../Models/Commandes");

class CommandesService {

    async getAllCommandes(){
        return await Commandes.findAll();
    }

    async getCommandesByID(commandesID){
        return await Commandes.findByPk(commandesID);
    }

    async addCommandes(commandedata){
        return await Commandes.create(commandedata);
    }
}
module.exports = new CommandesService();