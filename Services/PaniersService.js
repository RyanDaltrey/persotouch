const Paniers = require("../Models/Paniers");

class PaniersService {

    async getAllPaniers(){
        return await Paniers.findAll();
    }

    async getPaniersByID(paniersID){
        return await Paniers.findByPk(paniersID);
    }
}
module.exports = new PaniersService();