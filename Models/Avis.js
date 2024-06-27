const { Model, DataTypes } = require("sequelize");
const sequelize = require ("../Config/Sequelize");
const Produits = require ("./Produits");
const Clients = require ("./Clients");

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
            model : "Clients",
            key :"id_client"
        }
    },
    id_pro : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : "Produits",
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

Produits.hasMany(Avis, { as : "avisProFK" , foreignKey : "id_pro"});
Avis.belongsTo(Produits, { as : "produitsAvisFK" , foreignKey : "id_pro"});

Clients.hasMany(Avis , { as : "avisClientsFK" , foreignKey : "id_client"});
Avis.belongsTo(Clients, { as : "clientsAvisFK", foreignKey : "id_client"});

module.exports = Avis;