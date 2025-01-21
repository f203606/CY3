function saudacao() {
    alert("Bem-vindo a Taberna!");
}

let botao = document.getElementById("botaoEntrada");
botao.addEventListener("click", saudacao);

function mudarCor(evento) {
    evento.target.style.backgroundColor = "purple";
}

function resetCor(evento) {
    evento.target.style.backgroundColor = "black";
}

let caixa = document.getElementById("caixaMisteriosa");
caixa.addEventListener("mouseover", mudarCor)
caixa.addEventListener("click", resetCor)



