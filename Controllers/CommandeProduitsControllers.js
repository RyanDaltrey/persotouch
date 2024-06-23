const CommandeProduitsService = require ("../Services/CommandeProduitsService");

class CommandeProduitsControllers{

    async getAllCommandeProduits(request,result){
        try {
            const commandeProduits = await CommandeProduitsService.getAllCommandeProduits()
            result.json(commandeProduits);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la récupération des commande produits."})
        }

    }

    async getCommandeProduitsByID(request, result){
        try {
            const commande_produits = await CommandeProduitsService.getAllCommandeProduitsbyID(request.params.id)
            result.json(commande_produits);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la récupération des commande produits par ID."})
        }
    }

    async addCommandeProduits(request,result){
        try {
            const commande_produits = await CommandeProduitsService.addCommandeProduits(request.body)
            result.json(commande_produits);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de l'ajout du commande produits."})
        }
    }

    async updateCommandeProduis(request,result){
        try {
            const commande_produits = await CommandeProduitsService.updateCommandeProduits(request.params.id , request.body)
            result.json(commande_produits);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenur lors de la mise a jour de commande produits."})
        }
    }
}
module.exports = new CommandeProduitsControllers();