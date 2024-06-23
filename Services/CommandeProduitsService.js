const CommandeProduits  = require('../Models/CommandeProduits');

class CommandeProduitsService {

    async getAllCommandeProduits(){
        return await CommandeProduits.findAll();
    }

    async getAllCommandeProduitsbyID(commandeProduitsID){
        return await CommandeProduits.findByPk(commandeProduitsID);
    }

    async addCommandeProduits(commandeProduitsdata){
        return await CommandeProduits.create(commandeProduitsdata);
    }
}
module.exports = new CommandeProduitsService();