/* Figuring out how the yield expressions works on generators. */
function* questions() {
  const name = yield 'What is your name?';
  const band = yield 'What is your favorite band?';
  return `${name}'s favorite band is ${band}`;
}

/**
 * Function definition
 */
const separator = () => console.log('Finished that iterator-----');

const it = questions();
console.log(it.next());
console.log(it.next('John'));
console.log(it.next('The Doors'));

//console.log('Finished that iterator-----');
separator();

const it2 = questions();
console.log(it2.next('Alice'));
console.log(it2.next('Electric Light Orchestra'));
console.log(it2.next());

separator();

const it3 = questions();
console.log(it3.next('Albert'));
console.log(it3.next('Lucy', 'The Smiths'));
console.log(it3.next());

separator();

const it4 = questions();
console.log(it4.next('Karen'));
console.log(it4.next('Mari'));
console.log(it4.next('Earth, Wind & Fire'));

//function separator() { console.log('Finished that iterator-----'); }

