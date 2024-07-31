const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../Config/Sequelize');
const Produit = require ('./Produit');
const Client = require ("./Client");

class Panier extends Model {

}

Panier.init ({
    id_panier : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    id_client : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : "Client",
            key : "id_client"
        }
    },
    id_pro : {
        type : DataTypes.INTEGER,
        allowNull :false,
        references : {
            model : "Produit",
            key : "id_pro"
        }
    },
    quantite_panier : {
        type : DataTypes.INTEGER,
        allowNull : true
    }
}, {
    sequelize,
    modelName : "Panier",
    tableName : "panier",
    timestamps : false,
});

Panier.hasMany(Produit, {as : "produitsFK", foreignKey : "id_pro"});
Produit.belongsTo(Panier, {as : "paniersFK", foreignKey : "id_pro"});

Client.hasMany(Panier, {as : "paniersClientFK", foreignKey : "id_client"});
Panier.belongsTo(Client, {as : "clientsFK" , foreignKey : "id_client"});

module.exports = Panier;