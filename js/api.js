const api = {
    async buscarInformacoesPets() {
        try {
            const response = await fetch('http://localhost:3000/pets')
            return await response.json()
        } catch(error) {
            alert('Erro ao buscar informações dos pets')
            throw error
        }
    },

    async salvarInformacoesPets(pet) {
        try{
            const response = await fetch('http://localhost:3000/pets', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pet)
            })
            
            return await response.json()
            
        }   catch(error) {
            alert(`erro ao Salvar informações. Erro: ${error.message}`)
            throw error
        }
    },

    async editarInformacoesPets(pet) {
        try{
            const response = await fetch(`http://localhost:3000/pets/${pet.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pet)
            })
            
            return await response.json()
            
        }   catch(error) {
            alert(`erro ao Editar informações. Erro: ${error.message}`)
            throw error
        }    
    },

    async buscarPetsPorId(id) {
        try {
            const response = await fetch(`http://localhost:3000/pets/${id}`)
            return await response.json()
        }   catch(error) {
            alert("erro ao buscar pet")
            throw error
        }
    },

    async deletarPets(id) {
        try {
            const response = await fetch(`http://localhost:3000/pets/${id}` , {
            method: "DELETE"
            })   
        } catch (error) {
            alert("Erro ao deletar pet")
            throw error
        }
    }

}


export default api