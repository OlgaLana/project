'use strict';

for (let i = 0; i < 3; i++) {
   console.log('i = ' + i);
   for (let j = 0; j < 3; j++) {
      console.log('j = ' + j);
   }
}

let result = '';
const length = 9;

for (let i = 1; i < length; i++) {
   for (let j = 0; j < i; j++) {
      result += '*';
   }
   result += '\n';
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
   console.log('i = ' + i);
   for (let j = 0; j < 3; j++) {
      console.log('j = ' + j);
      for (let k = 0; k < 3; k++) {
         if (k === 2) continue first;
         console.log('k = ' + k);
      }
   }
}