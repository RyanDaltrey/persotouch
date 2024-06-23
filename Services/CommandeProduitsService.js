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

    async updateCommandeProduits(commandeProduitsID, commandeProduits){
        return await CommandeProduits.update(commandeProduits, {
            where : {id_com_pro : commandeProduitsID},
            individualHooks : true
        })
    }
}
module.exports = new CommandeProduitsService();