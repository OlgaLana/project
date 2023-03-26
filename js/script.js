'use strict';

const numberOfFilms = prompt('How much films you already saw?', '');
// if (numberOfFilms < 10) {
//     alert('not too much');
// } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
//     alert('not bad');
// } else if (numberOfFilms >= 30) {
//     alert('cool!');
// } else {
//     alert('error');
// }

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// let i = 0;
// while(i < personalMovieDB.count) {
//     let a = prompt('What is one of the last movies you saw?', '');
//     let b = prompt('How you can rate it?', '');
//     if (a != null && b != null && b != '' && a != '' && a.length <= 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// }

let i = 0;
do {
    let a = prompt('What is one of the last movies you saw?', '');
    let b = prompt('How you can rate it?', '');
    if (a != null && b != null && b != '' && a != '' && a.length <= 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
    i++;
} while (i < personalMovieDB.count);

// for (let i = 0; i < personalMovieDB.count; i++) {
//     let a = prompt('What is one of the last movies you saw?', '');
//     let b = prompt('How you can rate it?', '');
//     if (a != null && b != null && b != '' && a != '' && a.length <= 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

console.log(personalMovieDB);
