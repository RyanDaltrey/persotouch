const PanierService = require ("../Services/PanierService");

class PanierControllers {
    
    async getAllPaniers(request,result){
        try {
            const paniers = await PanierService.getAllPaniers()
            result.json(paniers);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la réception des paniers."})
        }
    }

    async getPanierByID(request, result){
        try {
            const panier = await PanierService.getPanierByID(request.params.id)
            result.json(panier);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la récupération du panier par ID."})
        }
    }

    async addPanier(request, result){
        try {
            const panier = await PanierService.addPanier(request.body)
            result.json(panier);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de l'ajout du panier."})
        }
    }

    async updatePanier(request, result){
        try {
            const panier = await PanierService.updatePanier(request.params.id , request.body)
            result.json(panier);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la mise a jour du panier."})
        }
    }

    async deletePanier(request, result){
        try {
            const panier = await PanierService.deletePanier(request.params.id)
            result.json({message : "Le panier vient d'etre supprimé."})
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la suppression"})
        }
    }
}
module.exports = new PanierControllers();