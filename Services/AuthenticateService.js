const jwt = require ("jsonwebtoken");
const Config = require ("../Config/Config.json");
const Clients = require ("../Models/Clients");

class AuthenticateService {

    async register(clientsData){
        const client = await Clients.create(clientsData);
        return this.generateToken(client);
    }

    generateToken(clients){
        const payload = {
            id: clients.id_client,
            email: clients.email
        }
        return jwt.sign(
            payload,
            Config.SECRET,
            {expiresIn:'2h'}
        )
    }
}

module.exports = new AuthenticateService;