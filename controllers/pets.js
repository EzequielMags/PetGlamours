const modeloDosPets = require('../models/pets')

async function get(req, res) {
    const { id } = req.params //busca id

    const obj = id ? { _id: id} : null

    try {
        const pets = await modeloDosPets.find(obj)
        console.log(pets)
        res.send(pets)
    }   catch(error) {
        alert('Erro no servidor de fazer o L')
        res.status(500).json({ message: 'Paysanduuu', error})
        throw error
    }

}


module.exports = {
    get
}