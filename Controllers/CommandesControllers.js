const CommandesService = require ("../Services/CommandesService");

class CommandesControllers {

    async getAllControllers (request, result){
        try {
            const commandes = await CommandesService.getAllCommandes()
            result.json(commandes);
        } catch (error) {
            result.status(500)
            result.json({ error : "Une erreur est survenue lors de la récupération des commandes."})
        }
    }

    async getCommandesByID (request, result){
        try {
            const commande = await CommandesService.getCommandesByID(request.params.id)
            result.json(commande);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la récupération de commande par ID."})
        }
    }
}

module.exports = new CommandesControllers();