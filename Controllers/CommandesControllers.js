const CommandesService = require ("../Services/Commandes.Service");

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
}