'use strict';

    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    console.log(result);
    
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'string') {
            data[i] = `${data[i]} - done`;
        } else {
            data[i] = data[i] * 2;
        }
    }
    console.log(data);
    
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    let j = 0;
    for (let i = data.length - 1; i > -1; i--) {
        result[j] = data[i];
        j++;
    }
    console.log(result);