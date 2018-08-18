var cards = ["queen", "queen", "king", "king"]; 
var cardsInPlay =[]; //Start with empty array, where we'll add cards that are in play
var cardOne = cards[0];
cardsInPlay.push(cardOne); //Add first user-selected card to end of cards in play array

console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo); //Add second user-selected card to end of cards in play array

console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
}