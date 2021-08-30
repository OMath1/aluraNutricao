var pacientes = document.querySelectorAll(".paciente")

var tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut")

    setTimeout(function() {
        event.target.parentNode.remove()
    }, 500)
})

// pacientes.forEach(function(paciente) {
//     paciente.addEventListener("dblclick", function(){
//         this.remove()
//     })
// })