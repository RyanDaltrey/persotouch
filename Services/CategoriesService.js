const Categories = require ('../Models/Categories');

class CategoriesService {

    async getAllCategories(){
        return await Categories.findAll();
    }
}

module.exports = new CategoriesService();