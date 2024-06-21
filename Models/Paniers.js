const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../Config/Sequelize');

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
        allowNull : false
    },
    id_pro : {
        type : DataTypes.INTEGER,
        allowNull :false
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

module.exports = Paniers;