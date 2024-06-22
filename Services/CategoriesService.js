const Categories = require ('../Models/Categories');

class CategoriesService {

    async getAllCategories(){
        return await Categories.findAll();
    }

    async getCategoriesByID(categoriesID){
        return await Categories.findByPk(categoriesID);
    }
    async addCategories(categoriedata){
        return await Categories.create(categoriedata)
    }
}


module.exports = new CategoriesService();