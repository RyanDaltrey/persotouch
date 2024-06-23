const Commandes = require ("../Models/Commandes");

class CommandesService {

    async getAllCommandes(){
        return await Commandes.findAll();
    }
}
module.exports = new CommandesService();