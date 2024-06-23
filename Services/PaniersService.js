const Paniers = require("../Models/Paniers");

class PaniersService {

    async getAllPaniers(){
        return await Paniers.findAll();
    }

    async getPaniersByID(paniersID){
        return await Paniers.findByPk(paniersID);
    }

    async addPaniers (paniersData){
        return await Paniers.create(paniersData);
    }
}
module.exports = new PaniersService();