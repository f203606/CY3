//Factory
function urlBuilder(number){}

//Object Instances
let card = new CardManager(urlBuilder);
let board = new BoardManager("board", 50, card);


//Dom elements
let menu = document.getElementById('menu');
let select = document.getElementById('numCards');
let start = document.getElementById('start');

//Configuring the menu
for (let i = 4; i <= 10; i+=2) {
    let n = i * i; //get i^2
    //Create a new option for the select
    let op = document.createElement('option');
    op.value = n;
    op.innerHTML = n;

    //Add the new option to the page
    select.appendChild(op);
}

//Event Listeners
start.addEventListener('click', () => {
    menu.classList.add('hidden');
    board.node.classList.remove('hidden');
    board.fill(select.value);
});

//Development code
start.click();
