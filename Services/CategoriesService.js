const Categories = require ('../Models/Categories');

class CategoriesService {

    async getAllCategories(){
        return await Categories.findAll({include : "produitsFK"});
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

    async deleteCategories(categoriesID){
        return await Categories.destroy ({
            where : { id_cat : categoriesID}
        })
    }

}
module.exports = new CategoriesService();