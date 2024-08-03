const express = require ('express');
const app = express();
const cors = require ('cors');

const CategorieRoutes = require ("./Routes/CategorieRoutes");
const ClientRoutes = require ("./Routes/ClientRoutes");
const AvisRoutes = require ("./Routes/AvisRoutes");
const CommandeRoutes = require ("./Routes/CommandeRoutes");
const ProduitRoutes = require ("./Routes/ProduitRoutes");
const CommandeProduitRoutes = require("./Routes/CommandeProduitRoutes");
const PanierRoutes = require("./Routes/PanierRoutes");
const AuthenticateRoutes = require ("./Routes/AuthenticateRoutes");
const AuthenticateControllers = require ("./Controllers/AuthenticateControllers");

app.use(express.json());
app.use(cors());
app.use("/categorie" , CategorieRoutes);
app.use("/client" , AuthenticateControllers.authenticateToken, ClientRoutes);
app.use("/avis", AvisRoutes);
app.use("/commande", AuthenticateControllers.authenticateToken, CommandeRoutes);
app.use("/produit", ProduitRoutes);
app.use("/commande_produit", AuthenticateControllers.authenticateToken, CommandeProduitRoutes);
app.use("/panier", AuthenticateControllers.authenticateToken, PanierRoutes);
app.use("/auth" , AuthenticateRoutes);

module.exports = app;


