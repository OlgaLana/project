'use strict';

const numberOfFilms = +prompt('How much films you already saw?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const movie1 = prompt('What is one of the last movies you saw?', '');
const rate1 = prompt('How you can rate it?', '');
const movie2 = prompt('What is one of the last movies you saw?', '');
const rate2 = prompt('How you can rate it?', '');

personalMovieDB.movies[movie1] = rate1;
personalMovieDB.movies[movie2] = rate2;

console.log(personalMovieDB);
