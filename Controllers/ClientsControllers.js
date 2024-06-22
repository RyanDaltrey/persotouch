const ClientsService = require("../Services/ClientsService");
const Clients = require ("../Services/ClientsService");

class ClientsControllers{

    async getAllClients(request, result) {
        try {
            const clients = await Clients.getAllClients()
            result.json(clients);
        } catch (error) {
            result.status(500)
            result.json ({error : "Une erreur est survenue lors de la récupération des clients."})
        }
    }

    async getClientsByID(request,result){
        try {
            const client = await Clients.getClientsByID(request.params.id)
            result.json(client);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la récupération de clients par ID."})
        }
    }

    async addClients(request,result){
        try {
            const client = await Clients.addClients(request.body)
            result.json(client);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de l'ajout du client."})
        }
    }

    async updateClients(request,result){
        try {
            const client = await Clients.updateClients(request.params.id, request.body)
            result.json(client);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la mise a jour du client."})
        }
    }
}

module.exports = new ClientsControllers();