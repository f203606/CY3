//Class to manage board actions
class BoardManager {
    //Dependencies
    cardManager; //object to manipulate cards inside the board

    //DOM Elements
    node; //The DOM element referring to the board

    //Number
    numImgs; //Number of different images in the library
    curNumCards; //Current number of cards in the board

    //Constructor
    constructor(id, numImgs, cardManager) {
        //get the board node using the received id
        this.node = document.getElementById(id);
        //Set the other properties
        this.numImgs = numImgs;
        this.cardManager = cardManager;
    }

    //Clear the board removing all cards
    clear() {
        this.node.innerHTML = "";
    }

    //Add the received  number of cards to the board
    fill(numberCards) {
        // Test if there isn't enough images
        if(numberCards>2*this.numImgs){
            // Show error message
            console.error(`Error: Not enough images for ${numberCards} cards.`);
            // Adjust the numer of cards and continue the game
            numberCards = 2*this.numImgs;
        }

        this.clear(); //Reset the board
        this.addCard(this.cardManager.gen(1)); //Place one card in the board

    }

    //Add one card to the board
    addCard(card){
        this.node.appendChild(card); //Append card to the board
    }

}