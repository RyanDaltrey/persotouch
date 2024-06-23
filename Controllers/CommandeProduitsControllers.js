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
}
module.exports = new CommandeProduitsControllers();