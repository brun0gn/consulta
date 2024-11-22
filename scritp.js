
// notificação na tela
function enviar(){
    window.alert("Seus dados foram salvos")
}


// local storage 
function gravar(){
    const nome = document.querySelector("#nome").value 
    const email = document.querySelector("#email").value
    const telefone = document.querySelector("#telefone").value
    const senha = document.querySelector("#senha").value
    localStorage.setItem("nome", nome)
    localStorage.setItem("email", email)
    localStorage.setItem("telefone", telefone)
    localStorage.setItem("senha", senha)
}

// modal
const abrir = document.querySelector("#abrirmodal")
const modal = document.querySelector("#modal")

abrir.addEventListener("click", ()=>{
    modal.showModal()
})

function gravarcpf(){
    const cpf = document.querySelector("#CPF").value

    // aqui vai a máscara do cpf

    localStorage.setItem("cpf", cpf)
}

addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("#nomerec").innerHTML=localStorage.getItem("nome")
    document.querySelector("#emailrec").innerHTML=localStorage.getItem("email")
    document.querySelector("#telrec").innerHTML=localStorage.getItem("telefone")
    document.querySelector("#cpfrec").innerHTML=localStorage.getItem("cpf")
    document.querySelector("#senharec").innerHTML=localStorage.getItem("senha")
})