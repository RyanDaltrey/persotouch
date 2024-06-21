const { Model, DataTypes } = require("sequelize");
const sequelize = require ("../Config/Sequelize");

class Clients extends Model {

}

Clients.init ({
    id_client : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    prenom_client : {
        type : DataTypes.STRING,
        allowNull : false
    },
    nom_client : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    mdp : {
        type : DataTypes.STRING,
        allowNull : false
    },
    adresse : {
        type : DataTypes.STRING,
        allowNull : false
    },
    ville : {
        type : DataTypes.STRING,
        allowNull : false
    },
    code_postal : {
        type : DataTypes.INTEGER,
        allowNull : false
    }, 
    pays : {
        type : DataTypes.STRING,
        allowNull : false
    }

}, {
    sequelize,
    modelName : "Clients",
    tableName : "clients",
    timestamps : false,
});

module.exports = Clients;