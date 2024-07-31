const Panier = require("../Models/Panier");

class PanierService {

    async getAllPaniers(){
        return await Panier.findAll({ include : ["clientsFK" , "produitsFK"]});
    }

    async getPanierByID(panierID){
        return await Panier.findByPk(panierID);
    }

    async addPanier(panierData){
        return await Panier.create(panierData);
    }

    async updatePanier(panierID, panier){
        return await Panier.update(panier, {
            where : {id_panier : panierID},
            individualHooks : true
        })
    }

    async deletePanier(panierID){
        return await Panier.destroy({
            where : {id_panier : panierID}
        })
    }
}
module.exports = new PanierService();