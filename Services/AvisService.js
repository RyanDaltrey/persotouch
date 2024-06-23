const Avis = require ('../Models/Avis');

class AvisService {

    async getAllAvis(){
        return await Avis.findAll();
    }
}

module.exports = new AvisService;