'use strict';

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;
while (i < 16) {
    i++;
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

const arrayOfNumbers = [];
    // Пишем решение вот тут
let j = 0;
for (let i = 5; i <= 10; i++) {
    arrayOfNumbers[j] = i;
    j++;
}
console.log(arrayOfNumbers);

for (let i = 20; i >= 10; i--) {
    console.log(i);
    if (i === 13) break;
}