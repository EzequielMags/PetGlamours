import api from "./api.js"

const ui = {

    async preencherFormulario(petId) {
        const pet = await api.buscarPetsPorId(petId)

        document.getElementById("pet-id").value = pet.id
        document.getElementById("pet-nome").value = pet.nome;
        document.getElementById("pet-especie").value = pet.especie;
        document.getElementById("pet-raca").value = pet.raca;

    },
    async renderizarPets() {

        try {
            const pets = await api.buscarInformacoesPets()

            pets.forEach(ui.adicionarPets)

        }   catch (error) {
            alert('Erro ao renderizar Pets')
            throw error
        }

        
    },

    adicionarPets(pet) {
        const listaDePets = document.getElementById('lista-pets')
        const liPet = document.createElement('li')
        liPet.setAttribute("data-id", pet.id)
        
        /*ITEM SUPERIOR*/ 

        const itemSuperior = document.createElement('div')
        itemSuperior.classList.add('item-superior')
        
        const imagemEspecie = document.createElement('img')
        imagemEspecie.src = `img/${pet.especie}.png`
        imagemEspecie.alt = `${pet.especie}`

        const nomeEspecie = document.createElement('h4')
        nomeEspecie.textContent = `${pet.especie.toUpperCase()}`

        itemSuperior.appendChild(imagemEspecie)
        itemSuperior.appendChild(nomeEspecie)

        /*ITEM MEIO*/ 
        const itemMeio = document.createElement('div')
        itemMeio.classList.add("item-meio")

        const nomeRaca = document.createElement('h4')
        nomeRaca.textContent = `${pet.raca.toUpperCase()}`

        itemMeio.appendChild(nomeRaca)
    
        /*ITEM INFERIOR*/

        const itemInferior = document.createElement('div')
        itemInferior.classList.add('item-inferior')

        const containerIcones = document.createElement('div')
        containerIcones.classList.add('container__icones')

        const botaoDeletar = document.createElement('button')
        const imagemDeletar = document.createElement('img')
        imagemDeletar.src = "img/deletee.svg"
        imagemDeletar.alt = "Deletar"

        botaoDeletar.onclick = (event) => {
            event.preventDefault()
            api.deletarPets(pet.id)
        }

        botaoDeletar.appendChild(imagemDeletar)
    
        const botaoEditar = document.createElement('button')
        const imagemEditar = document.createElement('img')
        imagemEditar.src = "img/editt.svg"
        imagemEditar.alt = "Editar"

        botaoEditar.onclick = (event) => {
            event.preventDefault()
            ui.preencherFormulario(pet.id)
        }

        botaoEditar.appendChild(imagemEditar)

        containerIcones.appendChild(botaoDeletar)
        containerIcones.appendChild(botaoEditar)
    
        const petNome = document.createElement('h4')
        petNome.textContent = `${pet.nome.toUpperCase()}`

        itemInferior.appendChild(containerIcones)
        itemInferior.appendChild(petNome)


        /*APPEND*/
        
        liPet.appendChild(itemSuperior)
        liPet.appendChild(itemMeio)
        liPet.appendChild(itemInferior)

        listaDePets.appendChild(liPet)
    }
}

export default ui