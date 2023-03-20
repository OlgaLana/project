'use strict';

if (1) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

const num = 50;

if (num < 49) {
    console.log('num < 49');
} else if (num > 100) {
    console.log('num > 100');
} else {
    console.log('num > 49 and num < 100');
}

const num2 = 51;
(num2 === 50) ? console.log(true) : console.log(false);

const num3 = 50;
switch (num3) {
    case 49:
        console.log('49');
        break;
    case 100:
        console.log('100');
        break;
    case '50':
        console.log('50');
        break;
    default:
        console.log('default');
        break;
}