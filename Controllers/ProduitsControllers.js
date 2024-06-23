const ProduitsServices = require ("../Services/ProduitsServices");

class ProduitsControllers {

    async getAllControllers(request, result){
        try {
            const produits = await ProduitsServices.getAllProduits()
            result.json(produits);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la récupération des produits."})
        }
    }
}
module.exports = new ProduitsControllers();