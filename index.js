const express = require ('express');
const app = express();
const CategoriesRoutes = require ("./Routes/CategoriesRoutes");

app.use(express.json());
app.use("/accueil" , CategoriesRoutes);

module.exports = app;