/*O método .sort() em JavaScript organiza os elementos de uma lista, mas, por padrão, ele os organiza em ordem lexicográfica (para strings) ou de acordo com a conversão numérica dos elementos.
Para ordenar de forma aleatória, passamos uma função de comparação. A função fornecida retorna um valor negativo, zero ou positivo:
Math.random() gera um número aleatório entre 0 e 1.
Subtrair 0.5 do valor de Math.random() faz com que o resultado da comparação seja um número entre -0.5 e 0.5.
Isso faz com que os elementos sejam trocados de maneira aleatória durante a ordenação, dando o efeito de "embaralhar" a lista.
Exemplo: Se a lista for [1, 2, 3], após a operação de ordenação aleatória, o resultado pode ser algo como [3, 1, 2] ou [2, 3, 1].*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(() => Math.random() - 0.5);
console.log(fruits);