const Produits = require ("../Models/Produits");

class ProduitsServices {
 
    async getAllProduits(){
        return await Produits.findAll();
    }

    async getProduitsByID(produitsID){
        return await Produits.findByPk(produitsID);
    }

    async addProduits(produitdata){
        return await Produits.create(produitdata);
    }

    async updateProduits(produitsID, produits){
        return await Produits.update(produits, {
            where : { id_pro : produitsID},
            individualHooks : true
        })
    }

    async deleteProduits(produitsID){
        return await Produits.destroy({
            where : {id_pro : produitsID}
        })
    }
}
module.exports = new ProduitsServices();