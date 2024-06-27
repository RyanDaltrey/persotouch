const { Model, DataTypes } = require("sequelize");
const sequelize = require ("../Config/Sequelize");
const Commandes = require ("./Commandes");
const Produits = require ("./Produits");

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
            model : "Commandes",
            key : "id_com"
        }
    },
    id_pro : {
        type : DataTypes.INTEGER,
        allowNull : false, 
        references : {
            model : "Produits",
            key : "id_pro"
        }
    }
}, {
    sequelize, 
    modelName : "CommandeProduits",
    tableName : "commande_produits",
    timestamps : false,
});

Produits.hasMany(CommandeProduits, { as : "commandeProProFK" , foreignKey : "id_pro"});
CommandeProduits.belongsTo(Produits, { as : "produitsComProFK" , foreignKey : "id_pro"});

Commandes.hasMany(CommandeProduits, { as : "commandesProComFK", foreignKey : "id_com"});
CommandeProduits.belongsTo(Commandes, { as : "commandesComProFK", foreignKey : "id_com"});

module.exports = CommandeProduits;