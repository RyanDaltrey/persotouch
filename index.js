const express = require ('express');
const app = express();
const CategoriesRoutes = require ("./Routes/CategoriesRoutes");
const ClientsRoutes = require ("./Routes/ClientsRoutes");
const AvisRoutes = require ("./Routes/AvisRoutes");
const CommandesRoutes = require ("./Routes/CommandesRoutes");
const ProduitsRoutes = require ("./Routes/ProduitsRoutes");
const CommandeProduitsRoutes = require("./Routes/CommandeProduitsRoutes");
const PaniersRoutes = require("./Routes/PaniersRoutes");


app.use(express.json());
app.use("/accueil" , CategoriesRoutes);
app.use("/clients" , ClientsRoutes);
app.use("/avis", AvisRoutes);
app.use("/commandes", CommandesRoutes);
app.use("/produits", ProduitsRoutes);
app.use("/commande_produits", CommandeProduitsRoutes);
app.use("/paniers", PaniersRoutes);



module.exports = app;