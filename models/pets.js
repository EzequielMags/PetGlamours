const mongoose = require('mongoose')


const schema = new mongoose.Schema({ //esquema do modelo
    nome: String,
    especie: String,
    raca: String
})

const Model = mongoose.model('pets', schema) //criando um modelo

module.exports = Model  //Exportando o Modelo