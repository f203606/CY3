//Mensagem de boas-vindas
console.log("Bem-vindo ao Labirinto dos Condicionais!");

//Primeiro desafio
console.log("Você chega em uma bifurcação. Para a esquerda, ouve-se um rugido terrível. Para a direita, há um silêncio suspeito. Escolha: esquerda ou direita?")

let resposta = "direita";

if (resposta == "esquerda") {
    console.log("Você enfrenta um pequeno dragão! Mas ele estava apenas bocejando. Ele permite que você passe")
} else if (resposta == "direita") {
    console.log("Você caminha silenciosamente e encontra uma sala cheia de armadilhas. Com cuidado, você consegue atravessar.")
} else {
    console.log("Você hesitou  e permaneceu parado. Uma porta secreta se abre e você cai em um poço escuro!")
}