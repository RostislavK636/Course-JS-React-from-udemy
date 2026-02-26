"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let mov = prompt("Один из последних просмотренных фильмов?");
let reiing = prompt("На сколько оцените его?");
let mov2 = prompt("Один из последних просмотренных фильмов?");
let reiing2 = prompt("На сколько оцените его?");

personalMovieDB.movies[mov] = reiing;
personalMovieDB.movies[mov2] = reiing2;

console.log(personalMovieDB);
