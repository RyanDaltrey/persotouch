const Categorie = require ('../Models/Categorie');

class CategorieService {

    async getAllCategories(){
        return await Categorie.findAll({include : "produitsFK"});
    }

    async getCategorieByID(categorieID){
        return await Categorie.findByPk(categorieID);
    }

    async addCategorie(categoriedata){
        return await Categorie.create(categoriedata);
    }

    async updateCategorie(categorieID, categorie){
        return await Categorie.update (categorie, {
            where : { id_cat : categorieID},
            individualHooks : true
        })
    }

    async deleteCategorie(categorieID){
        return await Categorie.destroy ({
            where : { id_cat : categorieID}
        })
    }

}
module.exports = new CategorieService();