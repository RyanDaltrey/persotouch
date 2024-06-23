const CommandeProduits  = require('../Models/CommandeProduits');

class CommandeProduitsService {

    async getAllCommandeProduits(){
        return await CommandeProduits.findAll();
    }

    async getAllCommandeProduitsbyID(commandeProduitsID){
        return await CommandeProduits.findByPk(commandeProduitsID);
    }
}
module.exports = new CommandeProduitsService();