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
            result.json({error : "Mot de passe ou email incorrect"})
        }
    }

    authenticateToken(request, result,next){
        const authHeader = request.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if(!token){
            result.status(401);
            result.json({error : "Vous n'avez pas access a cette route."});
        }
        jwt.verify(token, config.SECRET, (error, user) => {
            if (error){
                result.status(401);
                return result.json({error : "Votre token n'est pas valide"});
            }
            request.user = user;
            next();
        })
    }
}

module.exports = new AutheticateController();