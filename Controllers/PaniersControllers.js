const PaniersService = require ("../Services/PaniersService");

class PaniersControllers {
    
    async getAllPaniers(request,result){
        try {
            const paniers = await PaniersService.getAllPaniers()
            result.json(paniers);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la réception des paniers."})
        }
    }

    async getPaniersByID(request, result){
        try {
            const panier = await PaniersService.getPaniersByID(request.params.id)
            result.json(panier);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la récupération du panier par ID."})
        }
    }

    async addPaniers(request, result){
        try {
            const paniers = await PaniersService.addPaniers(request.body)
            result.json(paniers);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de l'ajout du panier."})
        }
    }

    async updatePaniers(request, result){
        try {
            const paniers = await PaniersService.updatePaniers(request.params.id , params.body)
            result.json(paniers);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la mise a jour du panier."})
        }
    }
}
module.exports = new PaniersControllers();