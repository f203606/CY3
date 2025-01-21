/*Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos).*/


var pessoa = {
    nome: ['Bob', 'Smith'],
    idade: 32,
    sexo: 'masculino',
    interesses: ['música','futebol'],
    bio: function () {
        console.log(
        this.nome[0] + 
        ' ' +
        this.nome[1] + 
        ' tem ' +
        this.idade +
        ' anos de idade. Ele (a) gosta de  ' +
        this.interesses[0] +
        ' e '+
        this.interesses[1] +
        '.'
        );
    },
    saudacao: function () {
        console.log ('Oi! Eu sou ' + this.nome[0] + '.');
    }
};

console.log(pessoa.nome[0]);
pessoa.bio();
pessoa.saudacao();