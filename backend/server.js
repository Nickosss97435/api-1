const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require('cors');
const emailRoutes = require('./routes/email.routes');
const postRoutes = require("./routes/post.routes"); // Import des routes post

const app = express(); // Déclaration de la variable app

const port = 5002;

// Middleware
app.use(express.json());
app.use(cors());

// connection à la DB
connectDB();

// Les Routes
// Utilisation des routes email
app.use('/api/email', emailRoutes);
// Utilisation des routes post
app.use("/post", postRoutes); 

// Lancer le serveur
app.listen(port, () => console.log("Le serveur est bien démarré sur le port " + port));
