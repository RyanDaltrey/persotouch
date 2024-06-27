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

module.exports = Paniers;