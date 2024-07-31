const jwt = require ("jsonwebtoken");
const Config = require ("../Config/Config.json");
const Client = require ("../Models/Client");

class AuthenticateService {

    async register(clientsData){
        const client = await Client.create(clientsData);
        return this.generateToken(client);
    }

    async login(email, mdp){
        const client = await Client.findOne({ where : {email : email}})
        if(!client || !await client.validatePassword(mdp)){
            throw new Error("Email ou mot de passe incorrect.")
        }
        return this.generateToken(client);
    }

    generateToken(client){
        const payload = {
            id: client.id_client,
            email: client.email
        }
        return jwt.sign(
            payload,
            Config.SECRET,
            {expiresIn:'2h'}
        )
    }
}

module.exports = new AuthenticateService();