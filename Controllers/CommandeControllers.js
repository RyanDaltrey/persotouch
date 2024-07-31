const CommandeService = require ("../Services/CommandeService");

class CommandeControllers {

    async getAllControllers (request, result){
        try {
            const commandes = await CommandeService.getAllCommandes()
            result.json(commandes);
        } catch (error) {
            result.status(500)
            result.json({ error : "Une erreur est survenue lors de la récupération des commandes."})
        }
    }

    async getCommandeByID (request, result){
        try {
            const commande = await CommandeService.getCommandeByID(request.params.id)
            result.json(commande);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la récupération de commande par ID."})
        }
    }

    async addCommande (request,result){
        try {
            const commande = await CommandeService.addCommande(request.body)
            result.json(commande);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de l'ajout de la commande."})
        }
    }

    async updateCommande (request,result){
        try {
            const commande = await CommandeService.updateCommande(request.params.id , request.body)
            result.json(commande);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la mise a jour de la commande."})
        }
    }

    async deleteCommande (request, result){
        try {
            const commande = await CommandeService.deleteCommande(request.params.id)
            result.json({message : "Votre commande a bien ete supprimé."})
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la supression de commandes."})
        }
    }
}

module.exports = new CommandeControllers();