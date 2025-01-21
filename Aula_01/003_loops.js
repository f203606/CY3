//for - ideal quando você sabe exatamente quantas vezes o código deve ser executado
for (let tocha = 1; tocha <= 10; tocha++) {
    console.log(`Tocha ${tocha} acesa`)
}

//while - útil quando não se sabe antecipadamente quantas vezes será necessário executar o loop
let energia = 100;
while (energia > 0) {
    console.log("Barreira de luz ainda ativa");
    energia -= 10;
}

//do-while - Este loop é ideal quando a primeira execução é necessária antes de avaliar a condição.
let material = 0;
do {
    console.log("Usando materiais encontrados para construir a ponte")
    material += 30;
} while (material < 100);