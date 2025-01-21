function calcularDano(forca, sorte) {
    var danoBase = forca * 2; //A força do herói influencia diretamente o dano base.
    var danoAdicional = Math.floor(Math.random() * sorte); //O fator sorte adiciona uma aleatoriedade
    return danoBase + danoAdicional;
}

var forcaDoHeroi = 10;
var sorteDoHeroi = 5;
var dano = calcularDano(forcaDoHeroi, sorteDoHeroi);
console.log(`Você causou ${dano} pontos de dano ao monstro!`)

var forcaDoGolem = 15; //O Golem é mais forte
var sorteDoGolem = 3; //O Golem tem menos sorte devido a sua baixa agilidade
var danoDoGolem = calcularDano(forcaDoGolem, sorteDoGolem);
console.log(`O Golem causou ${danoDoGolem} pontos de dano ao herói!`)

/*Este exemplo ilustra perfeitamente como as funções no mundo da programação podem simplificar tarefas repetitivas. Ao invés de calcular manualmente cada resultado de ataque durante o combate, a função calcularDano automatiza esse processo, tornando-o mais rápido e eficiente. Além disso, ela ajuda a manter o código do jogo organizado e reutilizável, permitindo que você se concentre mais na estratégia e na narrativa do jogo.*/