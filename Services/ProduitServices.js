const Produit = require ("../Models/Produit");

class ProduitServices {
 
    async getAllProduits(){
        return await Produit.findAll({ include : "categoriesFK"});
    }

    async getProduitByID(produitsID){
        return await Produit.findByPk(produitID);
    }

    async addProduit(produitdata){
        return await Produit.create(produitdata);
    }

    async updateProduit(produitID, produit){
        return await Produit.update(produit, {
            where : { id_pro : produitID},
            individualHooks : true
        })
    }

    async deleteProduit(produitID){
        return await Produit.destroy({
            where : {id_pro : produitID}
        })
    }
}
module.exports = new ProduitServices();