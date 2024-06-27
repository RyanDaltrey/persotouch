const AuthenticateService = require ("../Services/AuthenticateService");
const config = require ("../Config/Config.json");
const jwt = require ("jsonwebtoken");
const { json } = require("sequelize");

class AutheticateController{

    async register(request, result){
        try {
            const client = await AuthenticateService.register(request.body);
            result.json({client : client, message : "Inscription réussie!"});
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de l'inscription"});
        }
    }

    async login(request, result){
        try {
            const {email, mdp} = request.body;
            const token = await AuthenticateService.login(email, mdp);
            return json({token : token});
        } catch (error) {
            result.status(401)
            result.json({error : "Mot de pass ou email incorrect"})
        }
    }
}

module.exports = new AutheticateController();