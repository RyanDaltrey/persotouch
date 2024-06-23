const CommandeProduits  = require('../Models/CommandeProduits');

class CommandeProduitsService {

    async getAllCommandeProduits(){
        return await CommandeProduits.findAll();
    }
}
module.exports = new CommandeProduitsService();