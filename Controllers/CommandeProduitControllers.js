const CommandeProduitService = require ("../Services/CommandeProduitService");

class CommandeProduitControllers{

    async getAllCommandeProduits(request,result){
        try {
            const commandeProduits = await CommandeProduitsService.getAllCommandeProduits()
            result.json(commandeProduits);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la récupération des commande produits."})
        }

    }

    async getCommandeProduitByID(request, result){
        try {
            const commandeProduit = await CommandeProduitService.getAllCommandeProduitbyID(request.params.id)
            result.json(commandeProduit);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la récupération des commande produits par ID."})
        }
    }

    async addCommandeProduit(request,result){
        try {
            const commandeProduit = await CommandeProduitService.addCommandeProduit(request.body)
            result.json(commandeProduit);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de l'ajout du commande produits."})
        }
    }

    async updateCommandeProduit(request,result){
        try {
            const commandeProduit = await CommandeProduitService.updateCommandeProduit(request.params.id , request.body)
            result.json(commandeProduit);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenur lors de la mise a jour de commande produits."})
        }
    }

    async deleteCommandeProduit(request,result){
        try {
            const commandeProduit = await CommandeProduitService.deleteCommandeProduit(request.params.id)
            result.json({message : "Le récapitulatif de la commande vient d'etre supprimé."})
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la suppression de commande produits."})
        }
    }
}
module.exports = new CommandeProduitControllers();