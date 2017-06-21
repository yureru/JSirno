'use strict';

var _marked = [questions].map(regeneratorRuntime.mark);

/* Figuring out how the yield expressions works on generators. */
function questions() {
  var name, band;
  return regeneratorRuntime.wrap(function questions$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 'What is your name?';

        case 2:
          name = _context.sent;
          _context.next = 5;
          return 'What is your favorite band?';

        case 5:
          band = _context.sent;
          return _context.abrupt('return', name + '\'s favorite band is ' + band);

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

/**
 * Function definition
 */
var separator = function separator() {
  return console.log('Finished that iterator-----');
};

var it = questions();
console.log(it.next());
console.log(it.next('John'));
console.log(it.next('The Doors'));

//console.log('Finished that iterator-----');
separator();

var it2 = questions();
console.log(it2.next('Alice'));
console.log(it2.next('Electric Light Orchestra'));
console.log(it2.next());

separator();

var it3 = questions();
console.log(it3.next('Albert'));
console.log(it3.next('Lucy', 'The Smiths'));
console.log(it3.next());

separator();

var it4 = questions();
console.log(it4.next('Karen'));
console.log(it4.next('Mari'));
console.log(it4.next('Earth, Wind & Fire'));

//function separator() { console.log('Finished that iterator-----'); }