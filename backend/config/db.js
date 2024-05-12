const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Mongo BASE DE DONNEE por les postes est connecté");
        console.log("Connecté à MongoDB pour les emails");
    } catch (err) {
        console.error("Erreur de connexion à MongoDB :", err);
        process.exit(1);
    }
};

module.exports = connectDB;
