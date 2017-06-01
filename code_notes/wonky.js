/* Examples that I find wonky or unusual from JS.
   This file is not meant to be runned.
*/

/* --- Functions --- */

// JS can't into function overloading
function randomNumber(upTo)
{
  return randomNumber(0, upTo);
}

function randomNumber(from, upTo)
{
  return Math.floor((Math.random() * upTo) + from);
}


/* --- Data Types --- */

// Symbols can't be created like in the following examples:
const symbols = [
  const Crown = Symbol(),
  const Anchor = Symbol(),
  const Heart = Symbol(),
  const Club = Symbol(),
  const Spade = Symbol(),
  const Diamond = Symbol(),
]

const symbols = [
  crown = Symbol(),
  anchor = Symbol(),
  heart = Symbol(),
  club = Symbol(),
  spade = Symbol(),
  diamond = Symbol(),
  ];

// The proper way to declare an array of symbols is:
const crown = Symbol(),
  anchor = Symbol(),
  heart = Symbol(),
  club = Symbol(),
  spade = Symbol(),
  diamond = Symbol();

const symbols = [crown, anchor, heart, club, spade, diamond];

/* Operators */

/*
  Boolean operators only return boolean if the operands they're working with are booleans.
  Otherwise, the value that determined the outcome gets returned.
  Consider the following:
*/
/*
  If suppliedOptions is an object, options will refer to suppliedOptions. Because objects (even if they are empty)
  always evaluate to true.
  If no options were supplied, therefore suppliedOptions is null or undefined, we will get the second value from the expression (the { name: "Default"} object.)
*/
const options = suppliedOptions || { name: 'Default' };