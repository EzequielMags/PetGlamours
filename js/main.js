import api from "./api.js"
import ui from "./ui.js"

document.addEventListener('DOMContentLoaded', () => {
    ui.renderizarPets()
    
    const formularioPet = document.getElementById('formulario-pets')
    const botaoLimpar = document.querySelector('.botao__limpar')
    
    botaoLimpar.addEventListener('click', formularioPet.reset())

    formularioPet.addEventListener('submit', manipularSubmissaoFormulario)
})


async function manipularSubmissaoFormulario(event) {
    event.preventDefault()
    
    const formularioPet = document.getElementById('formulario-pets')
    const id = document.getElementById("pet-id").value;
    const nome = document.getElementById("pet-nome").value;
    const especie = document.getElementById("pet-especie").value;
    const raca = document.getElementById("pet-raca").value;
    
    try {
        if(especie.toLowerCase().trim() == 'canina' || especie.toLowerCase().trim() == 'felina'){
            if (id) {
                await api.editarInformacoesPets({id, nome, especie, raca})
            } else {
                await api.salvarInformacoesPets({nome, especie, raca})
            }
        }   else {
            alert('são aceitos apenas especies (felina) ou (caninas) ')
            formularioPet.reset()
        }

    }   catch (error) {
        alert('tente novamente')
        throw error
    }


}
