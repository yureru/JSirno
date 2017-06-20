'use strict';

/* Crown and Anchor game from the author's book */

/* Functions */

// returns a random integer in the range [m, n] (inclusive)
function rand(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}

// randomly returns a string representing one of the six
// Crown and Anchor faces
function randFace() {
  return ['crown', 'anchor', 'heart', 'spade', 'club', 'diamond'][rand(0, 5)];
}

var funds = 50; // starting conditions
var round = 0;

var _loop = function _loop() {
  round++;
  console.log('round ' + round + ':');
  console.log('\tstarting funds: ' + funds + 'p');
  // place bets
  var bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };
  var totalBet = rand(1, funds);
  if (totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet;
  } else {
    // distribute total bet
    var remaining = totalBet;
    do {
      var bet = rand(1, remaining);
      var face = randFace();
      bets[face] = bets[face] + bet;
      remaining = remaining - bet;
    } while (remaining > 0);
  }

  funds = funds - totalBet;
  console.log('\tbets: ' + Object.keys(bets).map(function (face) {
    return face + ': ' + bets[face] + ' pence';
  }).join(', ') + (' (total: ' + totalBet + ' pence)'));

  // roll dice
  var hand = [];
  for (var roll = 0; roll < 3; roll++) {
    hand.push(randFace());
  }
  console.log('\thand: ' + hand.join(', '));

  // collect winnings
  var winnings = 0;
  for (var die = 0; die < hand.length; die++) {
    var _face = hand[die];
    if (bets[_face] > 0) winnings = winnings + bets[_face];
  }
  funds = funds + winnings;
  console.log('\twinnings: ' + winnings);
};

while (funds > 1 && funds < 100) {
  _loop();
}
console.log('\tending funds: ' + funds);