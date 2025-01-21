//Class to manage card  creation and actions
class CardManager {
    //Atributos
    flippedCards = new Set ();
    urlFactory;

    //Constructor
    constructor(factory){
        this.urlFactory = factory;
    }

    //Generate new card based on the hero number
    gen(heroNumber) {
        let template = document.getElementById("cardTemplate");
        let clone = template.content.cloneNode(true);

        clone.children[0].addEventListener('click', 
            event => this.onClick(event)
        );

        return clone; //return the modified clone
    }
    
    //Handle Click Events

    onClick(event){
        this.flip(event.target);
    }

    //Flip the received card
    flip(cardNode){
        cardNode.children[0].classList.remove('selected');
        //Add the card to the set for checking later
        this.flippedCards.add(cardNode);
    }

    //Unflip the received card
    unFlip(cardNode){
        cardNode.children[0].classList.remove('selected');
    }

    //Set received card as matched
    disable(cardNode){
        cardNode.children[0].classList.add('matched');
        this.unFlip(cardNode);
    }



}

