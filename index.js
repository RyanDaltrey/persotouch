const express = require ('express');
const app = express();
const CategorieRoutes = require ("./Routes/CategorieRoutes");
const ClientRoutes = require ("./Routes/ClientRoutes");
const AvisRoutes = require ("./Routes/AvisRoutes");
const CommandeRoutes = require ("./Routes/CommandeRoutes");
const ProduitRoutes = require ("./Routes/ProduitRoutes");
const CommandeProduitRoutes = require("./Routes/CommandeProduitRoutes");
const PanierRoutes = require("./Routes/PanierRoutes");
const AuthenticateRoutes = require ("./Routes/AuthenticateRoutes");
const AuthenticateControllers = require ("./Controllers/AuthenticateControllers");
const cors = require ('cors');

app.use(express.json());
app.use(cors());
app.use("/accueil" , CategorieRoutes);
app.use("/clients" , AuthenticateControllers.authenticateToken, ClientRoutes);
app.use("/avis", AvisRoutes);
app.use("/commandes", AuthenticateControllers.authenticateToken, CommandeRoutes);
app.use("/produits", ProduitRoutes);
app.use("/commande_produits", AuthenticateControllers.authenticateToken, CommandeProduitRoutes);
app.use("/paniers", AuthenticateControllers.authenticateToken, PanierRoutes);
app.use("/auth" , AuthenticateRoutes);



module.exports = app;