const { Model, DataTypes } = require("sequelize");
const sequelize = require ("../Config/Sequelize");

class CommandeProduits extends Model {

}

CommandeProduits.init ({
    id_com_pro : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    quantite_commande : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    id_com : {
        type : DataTypes.INTEGER,
        allowNull : false, 
        references : {
            model : "CommandeProduits",
            key : "id_com"
        }
    },
    id_pro : {
        type : DataTypes.INTEGER,
        allowNull : false, 
        references : {
            model : "CommandeProduits",
            key : "id_pro"
        }
    }
}, {
    sequelize, 
    modelName : "CommandeProduits",
    tableName : "commande_produits",
    timestamps : false,
});

module.exports = CommandeProduits;