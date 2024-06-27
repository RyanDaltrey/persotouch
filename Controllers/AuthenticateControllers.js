const AuthenticateService = require ("../Services/AuthenticateService");
const config = require ("../Config/Config.json");
const jwt = require ("jsonwebtoken");

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
}

module.exports = new AutheticateController();