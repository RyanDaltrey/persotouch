const Categories = require ('../Models/Categories');

class CategoriesService {

    async getAllCategories(){
        return await Categories.findAll();
    }

    async getCategoriesByID(categoriesID){
        return await Categories.findByPk(categoriesID)
    }
}

module.exports = new CategoriesService();