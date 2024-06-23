const Avis = require ('../Models/Avis');

class AvisService {

    async getAllAvis(){
        return await Avis.findAll();
    }

    async getAvisByID(avisID){
        return await Avis.findByPk(avisID);
    }
}

module.exports = new AvisService;