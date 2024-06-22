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
}

module.exports = new ClientsControllers();