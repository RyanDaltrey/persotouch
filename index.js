const express = require ('express');
const app = express();
const CategoriesRoutes = require ("./Routes/CategoriesRoutes");
const ClientsRoutes = require ("./Routes/ClientsRoutes");
const AvisRoutes = require ("./Routes/AvisRoutes");
const CommandesRoutes = require ("./Routes/CommandesRoutes");
const ProduitsRoutes = require ("./Routes/ProduitsRoutes");
const CommandeProduitsRoutes = require("./Routes/CommandeProduitsRoutes");
const PaniersRoutes = require("./Routes/PaniersRoutes");
const AuthenticateRoutes = require ("./Routes/AuthenticateRoutes");
const AuthenticateControllers = require ("./Controllers/AuthenticateControllers");
const cors = require ('cors');

app.use(express.json());
app.use(cors());
app.use("/accueil" , CategoriesRoutes);
app.use("/clients" , AuthenticateControllers.authenticateToken, ClientsRoutes);
app.use("/avis", AvisRoutes);
app.use("/commandes", AuthenticateControllers.authenticateToken, CommandesRoutes);
app.use("/produits", ProduitsRoutes);
app.use("/commande_produits", AuthenticateControllers.authenticateToken, CommandeProduitsRoutes);
app.use("/paniers", AuthenticateControllers.authenticateToken, PaniersRoutes);
app.use("/auth" , AuthenticateRoutes);



module.exports = app;