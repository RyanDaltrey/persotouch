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
}

module.exports = new ClientsControllers();