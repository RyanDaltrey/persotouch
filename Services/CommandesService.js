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

    async updateCommandes(commandesID, commandes){
        return await Commandes.update(commandes, {
            where : {id_com : commandesID},
            individualHooks : true
        })
    }

    async deleteCommandes(commandesID){
        return await Commandes.destroy({
            where : {id_com : commandesID}
        })
    }
}
module.exports = new CommandesService();