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
}
module.exports = new PaniersControllers();