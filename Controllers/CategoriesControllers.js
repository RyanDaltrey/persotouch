const CategoriesService = require ('../Services/CategoriesService');

class CategoriesController{
    async getAllCategories(request, result){
        try {
            const categories = await CategoriesService.getAllCategories();
            result.json(categories)
        } catch (error) {
            result.status(500);
            result.json ({error : "Une erreur est survenue lors de la récupération des catégories."})
        }
    }

    async getCategoriesByID (request, result){
        try {
            const categorie = await CategoriesService.getCategoriesByID(request.params.id);
            result.json(categorie)
        } catch (error) {
            result.status(500)
            result.json ({error : "Une erreur est survenue lors de la récupération des catégories par ID."})
        }
    }

    async addCategories (request,result){
        try { 
            const categorie = await CategoriesService.addCategories(request.body);
            result.json(categorie);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de l'ajout d'une categorie."});
        }
    }
}

module.exports = new CategoriesController();