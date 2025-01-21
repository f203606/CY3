// map: Uma função que aplica uma operação a cada elemento de uma sequência (como uma lista ou um array).
// _: Em algumas linguagens, o underscore (_) é utilizado para representar um parâmetro que não será usado ou para indicar que não importa qual seja o valor de uma variável naquela posição. Em outras situações, pode ser parte de uma expressão lambda.
// i: Pode ser o índice ou o valor em um iterador, dependendo do contexto.

//Aqui, _ ignora o valor da lista e apenas o índice i é usado para multiplicar por 2, resultando em [0, 2, 4] (os índices multiplicados por 2).

let lista = [10, 20, 30];
let resultado = lista.map((_, i) => i * 2);
console.log(resultado);