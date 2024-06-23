const Produits = require ("../Models/Produits");

class ProduitsServices {
 
    async getAllProduits(){
        return await Produits.findAll();
    }
}
module.exports = new ProduitsServices();