const { InvalidConnectionError } = require('sequelize');
const CommandeProduit  = require('../Models/CommandeProduit');

class CommandeProduitService {

    async getAllCommandeProduits(){
        return await CommandeProduit.findAll({include : ["commandesComProFK" , "produitsComProFK"]});
    }

    async getAllCommandeProduitbyID(commandeProduitID){
        return await CommandeProduit.findByPk(commandeProduitID);
    }

    async addCommandeProduit(commandeProduitdata){
        return await CommandeProduit.create(commandeProduitdata);
    }

    async updateCommandeProduit(commandeProduitID, commandeProduit){
        return await CommandeProduit.update(commandeProduit, {
            where : {id_com_pro : commandeProduitID},
            individualHooks : true
        })
    }

    async deleteCommandeProduit(commandeProduitID){
        return await CommandeProduit.destroy({
            where : {id_com_pro : commandeProduitID}
        })
    }
}
module.exports = new CommandeProduitService();