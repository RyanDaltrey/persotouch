const { Model, DataTypes } = require("sequelize");
const sequelize = require ("../Config/Sequelize");
const Produit = require ("./Produit");
const Client = require ("./Client");

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
        allowNull : false,
        references : {
            model : "Client",
            key :"id_client"
        }
    },
    id_pro : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : "Produit",
            key : "id_pro"
        }
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

Produit.hasMany(Avis, { as : "avisProFK" , foreignKey : "id_pro"});
Avis.belongsTo(Produit, { as : "produitsAvisFK" , foreignKey : "id_pro"});

Client.hasMany(Avis , { as : "avisClientsFK" , foreignKey : "id_client"});
Avis.belongsTo(Client, { as : "clientsAvisFK", foreignKey : "id_client"});

module.exports = Avis;