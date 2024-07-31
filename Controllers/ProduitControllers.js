const ProduitServices = require ("../Services/ProduitServices");

class ProduitControllers {

    async getAllProduits(request, result){
        try {
            const produits = await ProduitServices.getAllProduits()
            result.json(produits);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la récupération des produits."})
        }
    }

    async getProduitByID(request, result){
        try {
            const produit = await ProduitServices.getProduitByID(request.params.id)
            result.json(produit);
        } catch (error) {
            result.status(500)
            result.json({ error : "Une erreur est survenue lors de la récupération de commande par ID."})
        }
    }

    async addProduit(request,result){
        try {
            const produit = await ProduitServices.addProduit(request.body)
            result.json(produit);
        } catch (error) {
            result.status(500)
            result.json({ error : "Une erreur est survenue lors de l'ajout du produit"})
        }
    }

    async updateProduit(request, result){
        try {
            const produit = await ProduitServices.updateProduit(request.params.id, request.body)
            result.json(produit);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la mise a jour du produit."})
        }
    }

    async deleteProduit(request, result){
        try {
            const produit = await ProduitServices.deleteProduit(request.params.id)
            result.json({message : "Le produit a bien été supprimé."})
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la supression du produit."})
        }
    }
}
module.exports = new ProduitControllers();