const Paniers = require("../Models/Paniers");

class PaniersService {

    async getAllPaniers(){
        return await Paniers.findAll();
    }
}
module.exports = new PaniersService();