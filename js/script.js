'use strict';

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Ok!');
} else {
    console.log('Not today');
}
console.log(hamburger === 3 && cola === 2 || nuggets && fries === 3);
console.log(hamburger || cola || fries);

console.log(hamburger && cola && fries);
console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'dggrebtrn');

console.log(1 || 0);
console.log(1 || 5);
console.log(null || 5);
console.log(0 || 'dggrebtrn');

let alexReport, samReport, kateReport, maryReport = 'done';
console.log(alexReport || samReport || kateReport || maryReport);

console.log(!0);
