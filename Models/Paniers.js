const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../Config/Sequelize');
const Produits = require ('./Produits');
const Clients = require ("./Clients");

class Paniers extends Model {

}

Paniers.init ({
    id_panier : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    id_client : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : "Clients",
            key : "id_client"
        }
    },
    id_pro : {
        type : DataTypes.INTEGER,
        allowNull :false,
        references : {
            model : "Produits",
            key : "id_pro"
        }
    },
    quantite_panier : {
        type : DataTypes.INTEGER,
        allowNull : true
    }
}, {
    sequelize,
    modelName : "Paniers",
    tableName : "panier",
    timestamps : false,
});

Paniers.hasMany(Produits, {as : "produitsFK", foreignKey : "id_pro"});
Produits.belongsTo(Paniers, {as : "paniersFK", foreignKey : "id_pro"});

Clients.hasMany(Paniers, {as : "paniersClientFK", foreignKey : "id_client"});
Paniers.belongsTo(Clients, {as : "clientsFK" , foreignKey : "id_client"});

module.exports = Paniers;