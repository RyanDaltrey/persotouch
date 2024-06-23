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
}
module.exports = new AvisController();