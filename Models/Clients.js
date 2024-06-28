const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/Sequelize");
const bcrypt = require('bcrypt');

class Clients extends Model {
    async validatePassword(mdp){
        return await bcrypt.compare(mdp, this.mdp);
    }
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
    hooks : {
        beforeCreate : async (client) =>{
            client.mdp = await bcrypt.hash(client.mdp, 10);
        },
        beforeUpdate : async (client) => {
            if (client.changed("mdp")){
                client.mdp = await bcrypt.hash(client.mdp, 10)
            }
        }
    }
});

module.exports = Clients;