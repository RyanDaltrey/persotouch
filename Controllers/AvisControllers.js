const AvisService = require ('../Services/AvisService');

class AvisController{

    async getAllAvis(request, result){
        try {
            const avis = await AvisService.getAllAvis()
            result.json(avis);
        } catch (error) {
            result.status(500)
            result.json({ error : "Une erreur est survenue lors de la récupération des avis."})
        }
    }

    async getAvisByID (request, result){
        try {
            const avis = await AvisService.getAvisByID(request.params.id)
            result.json(avis);
        } catch (error) {
            result.status(500)
            result.json({ error : "Une erreur est survenue lors de la récupération d'un avis par ID."})
        }
    }

    async addAvis (request,result){
        try {
            const avis = await AvisService.addAvis(request.body)
            result.json(avis);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de l'ajout de votre avis"})
        }
    }
}
module.exports = new AvisController();