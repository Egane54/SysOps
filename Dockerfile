# Utilisation de Node.js 18 pour plus de sécurité et de performance
FROM node:18

# Définition du répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires à l'installation des dépendances
COPY package.json package-lock.json ./

# Installer uniquement les dépendances de production pour réduire la taille de l'image
RUN npm install --omit=dev

# Copier tout le reste du code
COPY . .

# Exposer le port 3000 pour le serveur
EXPOSE 3000

# Lancer l'application
CMD ["node", "index.js"]
