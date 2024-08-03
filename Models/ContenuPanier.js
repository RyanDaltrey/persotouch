const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize.js');
const Produit = require ('../Models/Produit.js');
const Panier = require ('../Models/Panier.js');

class ContenuPanier extends Model {

}

ContenuPanier.init({
    id_contenu_panier : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    }, 
    id_pro : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : "Produit",
            key : "id_pro"
        }
    },
    id_panier : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : "Panier",
            key : "id_panier"
        }
        
    },
    quantite_panier : {
        type : DataTypes.INTEGER,
        allowNull : true
    }
});

Produit.belongsToMany(Panier, {through : ContenuPanier, as : "ProduitFKcontenu_panier" , foreignKey : "id_pro" });
Panier.belongsToMany(Produit, {through : ContenuPanier, as : "PanierFKcontenu_panier" , foreignKey : "id_panier"});
