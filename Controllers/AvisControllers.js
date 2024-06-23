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

    async updateAvis (request, result){
        try {
            const avis = await AvisService.updateAvis(request.params.id , request.body)
            result.json(avis);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la mise a jour de l'avis."})
        }
    }

    async deleteAvis (request, result){
        try {
            const avis = await AvisService.deleteAvis(request.params.id)
            result.json({message : "L'avis vient d'etre supprimé."})
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la supression de l'avis"})
        }
    }
}
module.exports = new AvisController();