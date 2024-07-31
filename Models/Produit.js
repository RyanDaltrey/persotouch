const { Model, DataTypes } = require("sequelize");
const sequelize = require ("../Config/Sequelize");
const Categorie = require ("./Categorie");

class Produit extends Model {

}

Produit.init ({
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
        allowNull: false,
        references : {
            model : "Categorie",
            key : "id_cat"
        }
    }

}, {
    sequelize,
    modelName : "Produit",
    tableName : "produit",
    timestamps : false,
});

Categorie.hasMany(Produit, {as : "produitsFK" , foreignKey : "id_cat"});
Produit.belongsTo(Categorie, {as :"categoriesFK" , foreignKey : "id_cat"});
   
module.exports = Produit;