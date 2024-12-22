const express = require('express') //pegando framework express

const rotas = express.Router() //utlizando sistema de rotas do framework

const controladorDePets = require('../controllers/pets') //controlador de pets

rotas.get('/pets/:id?', controladorDePets.get) //utilizando a rotas com o get do controlador faz o L

module.exports = rotas