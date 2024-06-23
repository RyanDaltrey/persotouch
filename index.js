const express = require ('express');
const app = express();
const CategoriesRoutes = require ("./Routes/CategoriesRoutes");
const ClientsRoutes = require ("./Routes/ClientsRoutes");
const AvisRoutes = require ("./Routes/AvisRoutes");


app.use(express.json());
app.use("/accueil" , CategoriesRoutes);
app.use("/clients" , ClientsRoutes);
app.use("/avis", AvisRoutes);


module.exports = app;