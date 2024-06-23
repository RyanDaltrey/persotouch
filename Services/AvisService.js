const { where } = require('sequelize');
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

    async deleteAvis(avisID){
        return await Avis.destroy({
            where :{ id_avis : avisID}
        })
    }
}

module.exports = new AvisService;