const { Model, DataTypes } = require("sequelize");
const sequelize = require ("../Config/Sequelize");

class Produits extends Model {

}

Produits.init ({
    id_pro : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    nom_pro : {
        type : DataTypes.STRING,
        allowNull : false
    },
    des_pro : {
        type : DataTypes.STRING,
        allowNull : false
    },
    prix : {
        type : DataTypes.FLOAT,
        allowNull : false
    },
    quantite_stock : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    img_cat : {
        type : DataTypes.STRING,
        allowNull : false
    },
    id_cat : {
        type : DataTypes.INTEGER,
        allowNull: false
    }

}, {
    sequelize,
    modelName : "Produits",
    tableName : "produits",
    timestamps : false,
});

    module.exports = Produits;