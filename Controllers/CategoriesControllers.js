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
}

module.exports = new CategoriesController();