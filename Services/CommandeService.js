const Commande = require ("../Models/Commande");

class CommandeService {

    async getAllCommandes(){
        return await Commande.findAll({ include : "clientsComFK"});
    }

    async getCommandeByID(commandeID){
        return await Commande.findByPk(commandeID);
    }

    async addCommande(commandedata){
        return await Commande.create(commandedata);
    }

    async updateCommande(commandeID, commande){
        return await Commande.update(commande, {
            where : {id_com : commandeID},
            individualHooks : true
        })
    }

    async deleteCommande(commandeID){
        return await Commande.destroy({
            where : {id_com : commandeID}
        })
    }
}
module.exports = new CommandeService();