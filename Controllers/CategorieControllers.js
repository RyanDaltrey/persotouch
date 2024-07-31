const CategorieService = require ('../Services/CategorieService');

class CategorieControllers{
    async getAllCategories(request, result){
        try {
            const categories = await CategorieService.getAllCategories();
            result.json(categories)
        } catch (error) {
            result.status(500);
            result.json ({error : "Une erreur est survenue lors de la récupération des catégories."})
        }
    }

    async getCategorieByID (request, result){
        try {
            const categorie = await CategorieService.getCategorieByID(request.params.id);
            result.json(categorie)
        } catch (error) {
            result.status(500)
            result.json ({error : "Une erreur est survenue lors de la récupération des catégories par ID."})
        }
    }

    async addCategorie (request,result){
        try { 
            const categorie = await CategorieService.addCategorie(request.body);
            result.json(categorie);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de l'ajout d'une categorie."});
        }
    }

    async updateCategorie(request, result){
        try {
            const categorie = await CategorieService.updateCategorie(request.params.id , request.body);
            result.json(categorie);
        } catch (error) {
            result.status(500)
            result.json ({error : "Une erreur est survenue lors de la mise a jour de la catégorie."})
        }
    }

    async deleteCategorie(request, result){
        try {
            const categorie = await CategorieService.deleteCategorie(request.params.id)
            result.json({message : "La catégorie vient d'etre supprimée."})
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la supression de catégorie."})
        }
    }
}

module.exports = new CategorieControllers();