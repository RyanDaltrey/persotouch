const jwt = require ("jsonwebtoken");
const Config = require ("../Config/Config.json");
const Clients = require ("../Models/Clients");

class AuthenticateService {

    async register(clientsData){
        const client = await Clients.create(clientsData);
        return this.generateToken(client);
    }
}

module.exports = new AuthenticateService;