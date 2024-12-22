const express = require("express"); //framework de rotas para node
const cors = require('cors')
const db = require("../database"); //importa a funcao connect do db
const rotas = require('../../routes/pets.js')
const app = express();
db.connect(); //conecta no banco

app.use(cors())

app.use(express.json()); //midleware para permitir json

app.use('/api', rotas)

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server listening on port ${port}`)); //starta o server,q vai ouvir na porta 8080

