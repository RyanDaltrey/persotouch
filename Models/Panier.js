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
    date_creation : {
        type : DataTypes.DATE,
        allowNull : false
    }
}, {
    sequelize,
    modelName : "Panier",
    tableName : "panier",
    timestamps : false,
});



Client.hasMany(Panier, {as : "paniersClientFK", foreignKey : "id_client"});
Panier.belongsTo(Client, {as : "clientsFK" , foreignKey : "id_client"});

module.exports = Panier;