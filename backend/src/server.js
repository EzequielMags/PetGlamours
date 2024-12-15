const express = require("express"); //framework de rotas para node

const db = require("../database"); //importa a funcao connect do db

const app = express();
db.connect(); //conecta no banco

app.use(express.json()); //midleware para permitir json

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server listening on port ${port}`)); //starta o server,q vai ouvir na porta 8080
