FROM node:14
WORKDIR /app
COPY index.js .
RUN npm install
COPY . .
CMD ["node", "index.js"]
