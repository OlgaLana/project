'use strict'

console.log('arr' + ' - object');
console.log('arr ' + 4);
console.log(4 + ' - object');
console.log(+'arr' + ' - object');
console.log(+'4' + ' - object');
console.log(+'4' + '5');
console.log(+'4' + 5);
console.log(+'4' + +'5');

let incr = 10,
    decr = 10;
    
// ++incr;
// --decr;

console.log(incr++);
console.log(decr--);

console.log(incr);
console.log(decr);

console.log(5%2);

console.log(2*4 == '8');
console.log(2*4 === '8');

const isChecked = false,
      isClosed = false;
      
console.log(isChecked || !isClosed);

console.log('6' !== 2 + 2 * 2);