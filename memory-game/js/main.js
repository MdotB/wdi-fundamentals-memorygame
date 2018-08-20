var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
},
]; 
var cardsInPlay =[]; //Start with empty array, where we'll add cards that are in play
var cardElement;
var createBoard = function() {
	for (i = 0; i < cards.length; i++) {
		cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};
var score = 0;
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		score = score + 1;
		alert("You found a match!");
		document.getElementById('current-score').innerHTML = "Current Score: " + score;
		
	} 
	else {
		alert("Sorry, try again.");
	}
};

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

var resetBoard = function() {
	cardsInPlay = [];
	var removeNodes = document.getElementById('game-board');
	while (removeNodes.firstChild) {
		removeNodes.removeChild(removeNodes.firstChild);
	}
	createBoard();

};
createBoard();
document.getElementById('reset').addEventListener('click', resetBoard);

