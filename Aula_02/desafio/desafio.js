x = document.getElementById("container")
for (let i = 1; i <= 10; i++) {
    let caixa = document.createElement('input');
    caixa.setAttribute('type','button');
    caixa.value = i;
    x.appendChild(caixa);
}