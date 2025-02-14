require('dotenv').config(); // Charger les variables d'environnement
const express = require('express');

const app = express();
const port = process.env.PORT || 3000; // Permet d'utiliser un port défini dans un .env

// Middleware pour loguer les requêtes (optionnel mais utile)
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Route principale
app.get('/', (req, res) => {
    res.status(200).send('Hello, World!');
});

// Gestion des routes inexistantes (404)
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
    console.error('Erreur serveur :', err);
    res.status(500).send('Internal Server Error');
});

// Lancement du serveur
app.listen(port, () => {
    console.log(`✅ Serveur démarré sur http://localhost:${port}`);
});
