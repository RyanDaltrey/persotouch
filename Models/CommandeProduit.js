const { Model, DataTypes } = require("sequelize");
const sequelize = require ("../Config/Sequelize");
const Commande = require ("./Commande");
const Produit = require ("./Produit");

class CommandeProduit extends Model {

}

CommandeProduit.init ({
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
            model : "Commande",
            key : "id_com"
        }
    },
    id_pro : {
        type : DataTypes.INTEGER,
        allowNull : false, 
        references : {
            model : "Produit",
            key : "id_pro"
        }
    }
}, {
    sequelize, 
    modelName : "CommandeProduit",
    tableName : "commande_produit",
    timestamps : false,
});

Produit.hasMany(CommandeProduit, { as : "commandeProProFK" , foreignKey : "id_pro"});
CommandeProduit.belongsTo(Produit, { as : "produitsComProFK" , foreignKey : "id_pro"});

Commande.hasMany(CommandeProduit, { as : "commandesProComFK", foreignKey : "id_com"});
CommandeProduit.belongsTo(Commande, { as : "commandesComProFK", foreignKey : "id_com"});

module.exports = CommandeProduit;