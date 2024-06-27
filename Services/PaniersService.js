const Paniers = require("../Models/Paniers");

class PaniersService {

    async getAllPaniers(){
        return await Paniers.findAll({ include : ["clientsFK" , "produitsFK"]});
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

    async deletePaniers(paniersID){
        return await Paniers.destroy({
            where : {id_panier : paniersID}
        })
    }
}
module.exports = new PaniersService();