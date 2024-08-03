const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/Sequelize");
const Client = require("./Client");

class Commande extends Model {

}

Commande.init ({
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
            model : "Client",
            key : "id_client"
        }
    }
}, {
    sequelize, 
    modelName : "Commande",
    tableName : "commande",
    timestamps : false,
}); 

Client.hasMany(Commande, {as : "commandesFK" , foreignKey : "id_client"});
Commande.belongsTo(Client, {as : "clientsComFK", foreignKey : "id_client"});

module.exports = Commande;