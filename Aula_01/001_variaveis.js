//var (antigo)
/*Por sua imprevisibilidade, seu uso acaba não sendo muito recomendado, 
considerando que pode ser declarada novamente dentro do mesmo escopo.*/
var escopo = "Escopo";

//let (flexível)
//let é restrita a somente dentro dos domínios do escopo.
if (true) {
    let mensagem = "Dentro do if";
    console.log(mensagem);
}

//const
//declarar uma variável que não mudará depois de criada
const saudacao = "Olá, mundo!";
console.log(saudacao);