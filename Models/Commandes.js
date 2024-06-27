const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/Sequelize");

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

module.exports = Commandes;