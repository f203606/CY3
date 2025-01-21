//Criando uma classe com método construtor
class Professor {
    constructor (nome, teaches) {
        this.nome = nome;
        this.teaches = teaches;
    }

    //1st método
    introduceSelf() {
        console.log('Meu nome é ' + this.nome + ' e serei o (a) seu (sua) professor (a) de ' + this.teaches + '.');
    }
}

//Instaciando objetos
prof1 = new Professor("Pedro", "Psicologia");
prof2 = new Professor("Maria", "Poesia");
prof3 = new Professor('André', 'Programação')

//Utilizando a classe
console.log(prof1.teaches);
prof1.introduceSelf();

console.log(prof2.teaches);
prof2.introduceSelf();

console.log(prof3.nome);
prof3.introduceSelf();