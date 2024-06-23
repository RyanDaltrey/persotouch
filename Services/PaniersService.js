const Paniers = require("../Models/Paniers");

class PaniersService {

    async getAllPaniers(){
        return await Paniers.findAll();
    }

    async getPaniersByID(paniersID){
        return await Paniers.findByPk(paniersID);
    }

    async addPaniers(paniersData){
        return await Paniers.create(paniersData);
    }

    async updatePaniers(paniersID, paniers){
        return await Paniers.update(paniers, {
            where : {id_panier : paniersID},
            individualHooks : true
        })
    }
}
module.exports = new PaniersService();