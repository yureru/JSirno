/* Crown and Anchor game exercise from Learning JavaScript 3rd edition

    There's a mat with six squares: Crown, Anchor, Heart, Club, Spade, and Diamond. The sailor places
    any number of coins on any combination of the squares: these becomes the bets. Then he rolls three
    6-sided dice with faces that match the squares on the mat. For each dice that matches a square that
    has a bet on it, the sailor wins that amount of money.

    Playing logic:
    The sailor starts with 50 pences, he has a strategy: if he's lucky to double his money he quits,
    if not, he tries until he's broke.

    How to win:
    The "best" outcoming bet is to put a lot in one square, then expect that all dices sides are that after rolling.
    The worst is to bet in all squares, you'll win with three squares, but lose with 3 others.
    Find a "best" strategy for this.

	Things we'll need:
	- The quantity of current pences the user has.
	- Representations of the Crown, Anchor, Heart, Club, Spade, and Diamond elements.
	- 3 Dices that use these representations.
	- 6 Squares to place a given bet using the symbols' representations.

	- Logic to:
	  - Place bets using an algoritmh to have the best outcome (to win.)
	  - Roll the dices, determine how much pences we win or lose.
	  - Have some logic that repeats earlier until we broke or double the mone
*/

'use strict';

var player = { startingPences: 50 };

// Constants
var winLimit = 50 * 2;
var loseLimit = 0;
var deck = ["Crown", "Anchor", "Heart", "Club", "Spade", "Diamond"];

// Arrays to save the bets and the dices.
var currentBets = [];
var dices = [];

mainGame();

/**
 * Program's main logic.
 */
function mainGame() {
  // Works as expected: Can't bet more than current pences, Can't bet a card without putting money on it, etc.
  while (player.startingPences > 0 && player.startingPences <= winLimit) {
    placeBet(player, currentBets, deck);
    rollDices(dices, deck);
    calculateOutcome(player, currentBets, dices, deck);

    // Clean bets and dices
    currentBets = [];
    dices = [];
  }

  //console.log("Pences left are: " + player.startingPences);
  console.log("Pences left are: " + player.startingPences);

  var outcome = player.startingPences <= 0 ? "You lose!" : "You win!";
  console.log(outcome);
}

/**
 * Places a bet from 1 to 4 cards. The bet to each card is "random" and it can't be more than current's pences available.
 * @param {any} player Wrapper with the pences quantity.
 * @param {any} currentBets Array to save the bets.
 * @param {any} deck Deck we're reading from.
 */
function placeBet(player, currentBets, deck) {
  var manyCards = randomNumber(1, 4);

  // Changing && to || makes to place all the bets with only one call of this function.
  for (var i = 0; i < manyCards && player.startingPences > loseLimit; ++i) {
    var maxBet = player.startingPences >= 10 ? randomNumber(1, 10) : player.startingPences;
    var penceBet = randomNumber(1, maxBet);

    player.startingPences -= penceBet;

    var bet = { cardID: getRandomCardID(deck), quantity: penceBet };
    currentBets.push(bet);
  }
}

/**
 * Rolls a dice.
 * @param {any} dices The dices' array to save the card ID.
 * @param {any} deck Deck to choose a card from.
 */
function rollDices(dices, deck) {
  for (var i = 0; i < 3; ++i) {
    dices.push(getRandomCardID(deck));
  }
}

/**
 * Adds pences to player.startingPences if he won.
 * @param {any} player Wrapper with the pences quantity.
 * @param {any} currentBets Array to read the bets.
 * @param {any} dices The dices' array to read which were choosed.
 */
function calculateOutcome(player, currentBets, dices) {
  for (var i = 0; i < currentBets.length; ++i) {
    for (var j = 0; j < dices.length; ++j) {
      if (dices[j] == currentBets[i].cardID) {
        var winAmt = currentBets[i].quantity * 2;
        player.startingPences += winAmt;
      }
    }
  }
}

/**
 * Gets a card's ID based on deck.
 * @param {any} deck deck to chose an ID from.
 */
function getRandomCardID(deck) {
  return randomNumber(0, deck.length - 1);
}

/**
 * Returns a random number from a range specified (inclusive).
 * @param {number} from Start of range.
 * @param {number} upto End of range.
 */
function randomNumber(from, upto) {
  return Math.floor(Math.random() * (upto - from + 1)) + from;
}