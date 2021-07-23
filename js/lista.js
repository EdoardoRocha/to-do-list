function adicionarTarefa() {
    var intarefa = document.getElementById('inTarefa')


    var Tarefa = intarefa.value
     


    if(Tarefa == "") {
        alert('Informe a tarefa')
        inTarefa.focus()
        return
    }

    var divQuadro = document.getElementById('divQuadro')
    var h5 = document.createElement("h5")

    var texto = document.createTextNode(Tarefa)


    h5.appendChild(texto)
    divQuadro.appendChild(h5)



    inTarefa.value = ""
    inTarefa.focus()


}
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener("click", adicionarTarefa)

function selecionarTarefa() {
    var h5 = document.getElementsByTagName('h5')
    var numH5 = h5.length

    if(numH5 == 0) {
        alert('Nãohá tarefas para selecionar')
  return
    }

    var aux = -1

    for(var i = 0; i<numH5; i++) {
        if(h5[i].className == "tarefaSelecionada") {
            h5[i].className = "tarefaNormal"
            aux = i
            break
        }
    }


    if(aux == numH5 - 1) {
        aux = -1
    }

    h5[aux + 1].className = "tarefaSelecionada"
}
var btSelecionar = document.getElementById('btSelecionar')
btSelecionar.addEventListener('click', selecionarTarefa)


function retirarSelecionada() {
    var divQuadro = document.getElementById('divQuadro')
    var h5 = document.getElementsByTagName('h5')
    var numH5 = h5.length

    var aux = -1

    for(var i =0; i < numH5; i++) {
        if(h5[i].className == "tarefaSelecionada") {
            aux = i
            break
        }
    }

    if(aux == -1) {
        alert('Selecione uma tarefa para removeê-la...')
        return
    }

    if(confirm("Confirme Exclusão de " + h5[aux].textContent + "?")) {
        divQuadro.removeChild(h5[aux])
        
    }
}
var btRetirar = document.getElementById("btRetirar")
btRetirar.addEventListener('click', retirarSelecionada)

function gravarTarefas() {
    var h5 = document.getElementsByTagName('h5')
    var numH5 = h5.length

    if(numH5 == 0) {
        alert("Não há tarefas para serem salvas")
        return
    }

    var tarefas = ""
    for(var i = 0; i < numH5; i++) {
        tarefas += h5[i].textContent + ";"
    }

    localStorage.setItem('TarefasDia', tarefas.substr(0, tarefas.length -1))

    if(localStorage.getItem("TarefasDia")) {
        alert('OK! Tarefas Salvas')
    }
}
var btgravar = document.getElementById('btGravar')
btgravar.addEventListener('click', gravarTarefas)

function recuperarTarefasSalvas() {
    if(localStorage.getItem('TarefasDia')) {
        var tarefas = localStorage.getItem('TarefasDia').split(";")

        var divQuadro = document.getElementById('divQuadro')

        for(var i = 0; i < tarefas.length; i++) {
            var h5 = document.createElement('h5')
            var texto = document.createTextNode(tarefas[i])
        h5.appendChild(texto)
        divQuadro.appendChild(h5)
        }
    }
}
recuperarTarefasSalvas()


function TarefasConcluidas() {
    if(localStorage.getItem('TarefasDia')) {
        var divQuadro = document.getElementById('divQuadro')
    
    
        if(confirm('Assim que confirmar entenderemos que você concluiu todas suas tarefas, Então vocẽ terminou tudo?')) {
           
            localStorage.removeItem('TarefasDia')
            var h3 = document.createElement('h3')
            var texto = document.createTextNode('Tarefas concluidas com sucesso! 🎊🎉 ')
            
         h3.appendChild(texto)
         divQuadro.appendChild(h3)
        }
    } else {
        alert('Sem tarefas na lista...')
        inTarefa.focus()
    }
    
}
var btConcluido = document.getElementById('btConcluido')
btConcluido.addEventListener('click', TarefasConcluidas)