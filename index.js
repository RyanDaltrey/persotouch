const express = require ('express');
const app = express();
const CategoriesRoutes = require ("./Routes/CategoriesRoutes");
const ClientsRoutes = require ("./Routes/ClientsRoutes");

app.use(express.json());
app.use("/accueil" , CategoriesRoutes);
app.use("/clients" , ClientsRoutes);


module.exports = app;