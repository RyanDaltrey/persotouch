const { Model, DataTypes } = require("sequelize");
const sequelize = require ("../Config/Sequelize");

class Avis extends Model {

}

Avis.init ({
    id_avis : {
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
        allowNull : false
    },
    note : {
        type: DataTypes.INTEGER,
        allowNull : false
    },
    commentaire : {
        type : DataTypes.STRING,
        allowNull : true
    },
    date_avis : {
        type : DataTypes.DATE,
        allowNull : false
    }
}, {
    sequelize,
    modelName : "Avis",
    tableName : "avis",
    timestamps : false,
});

module.exports = Avis;