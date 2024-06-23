const Avis = require ('../Models/Avis');

class AvisService {

    async getAllAvis(){
        return await Avis.findAll();
    }

    async getAvisByID(avisID){
        return await Avis.findByPk(avisID);
    }

    async addAvis(avisdata){
        return await Avis.create(avisdata);
    }

    async updateAvis(avisID, avis){
        return await Avis.update(avis, {
            where : {id_avis : avisID},
            individualHooks : true
        })
    }
}

module.exports = new AvisService;