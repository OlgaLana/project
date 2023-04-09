'use strict';

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert (amount, curr) {
  return curr * amount;
}

function promotion (result) {
  console.log(result * discount);
}

// convert(500, usdCurr);
// convert(500, eurCurr);

const res = convert(500, usdCurr);
promotion(res);

function test () {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return
  }
  console.log('Done');
}
test();

function doNothing () {};
console.log(doNothing() === undefined);

function sayHello(name) {
  return `Hello ${name}`
}
console.log(sayHello('Olga'));

function returnNeighboringNumbers(number) {
  return [number - 1, number, number + 1];
}
// returnNeighboringNumbers(5);
console.log(returnNeighboringNumbers(5));

function getMathResult(num1, num2) {
  if (typeof(num2) !== 'number' || num2 <= 0) {
      return num1;
  } else {
      let result = num1;
      let newString = `${num1}`;

      for (let i = 1; i < num2; i++) {
          result = result + num1;
          newString = `${newString}---${result}`;
      }

      return newString;
  }
}
// console.log(getMathResult(5, '3'));
// console.log(getMathResult(5, 3));
console.log(getMathResult(10, -5));

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    // for (let j = 0; j < 2 * i + 1; j++) {
    //     result += "*";
    // }
    result += "\n";
}

console.log(result)
