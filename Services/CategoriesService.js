const Categories = require ('../Models/Categories');

class CategoriesService {

    async getAllCategories(){
        return await Categories.findAll();
    }

    async getCategoriesByID(categoriesID){
        return await Categories.findByPk(categoriesID);
    }

    async addCategories(categoriedata){
        return await Categories.create(categoriedata);
    }

    async updateCategories(categoriesID, categories){
        return await Categories.update (categories, {
            where : { id_cat : categoriesID},
            individualHooks : true
        })
    }


}


module.exports = new CategoriesService();