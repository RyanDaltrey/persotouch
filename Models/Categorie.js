const { Model, DataTypes } = require("sequelize");
const sequelize = require ("../Config/Sequelize");

class Categorie extends Model {

}

Categorie.init ({
    id_cat : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom_cat : {
        type : DataTypes.STRING,
        allowNull : false
    },
    des_cat : {
        type : DataTypes.STRING,
        allowNull : false
    }
}, {
    sequelize,
    modelName : "Categorie",
    tableName : "categorie",
    timestamps : false,
})

module.exports = Categorie;