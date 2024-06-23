const Produits = require ("../Models/Produits");

class ProduitsServices {
 
    async getAllProduits(){
        return await Produits.findAll();
    }

    async getProduitsByID(produitsID){
        return await Produits.findByPk(produitsID);
    }

    async addProduits(produitdata){
        return await Produits.update(produitdata);
    }
}
module.exports = new ProduitsServices();