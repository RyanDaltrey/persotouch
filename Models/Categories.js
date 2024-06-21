const { Model, DataTypes } = require("sequelize");
const sequelize = require ("../Config/Sequelize");

class Categories extends Model {

}

Categories.init ({
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
    modelName : "Categories",
    tableName : "persotouch",
    timestamps : false,
})

module.exports = Categories;