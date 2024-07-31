const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/Sequelize");
const Clients = require("./Client");

class Commandes extends Model {

}

Commandes.init ({
    id_com : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    date_commande : {
        type : DataTypes.DATE,
        allowNull : false
    },
    montant_total : {
        type : DataTypes.FLOAT,
        allowNull : false
    },
    id_client : {
        type : DataTypes.INTEGER,
        allowNull : false, 
        references : {
            model : "Clients",
            key : "id_client"
        }
    }
}, {
    sequelize, 
    modelName : "Commandes",
    tableName : "commandes",
    timestamps : false,
}); 

Clients.hasMany(Commandes, {as : "commandesFK" , foreignKey : "id_client"});
Commandes.belongsTo(Clients, {as : "clientsComFK", foreignKey : "id_client"});

module.exports = Commandes;