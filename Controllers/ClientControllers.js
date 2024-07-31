const ClientService = require("../Services/ClientService");


class ClientControllers{

    async getAllClients(request, result) {
        try {
            const clients = await ClientService.getAllClients()
            result.json(clients);
        } catch (error) {
            result.status(500)
            result.json ({error : "Une erreur est survenue lors de la récupération des clients."})
        }
    }

    async getClientByID(request,result){
        try {
            const client = await ClientService.getClientByID(request.params.id)
            result.json(client);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la récupération de clients par ID."})
        }
    }

    async addClient(request,result){
        try {
            const client = await ClientService.addClient(request.body)
            result.json(client);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de l'ajout du client."})
        }
    }

    async updateClient(request,result){
        try {
            const client = await ClientService.updateClient(request.params.id, request.body)
            result.json(client);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la mise a jour du client."})
        }
    }

    async deleteClient(request,result){
        try {
            const client = await ClientService.deleteClient(request.params.id)
            result.json({ message : "Le client vient d'etre supprimé."})
        } catch (error) {
            result.status(500)
            result.json({error :"Une erreur est survenue lors de la supression du client."})
        }
    }
}

module.exports = new ClientControllers();