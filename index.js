"use strict";
// ЗАДАНИЕ 1
// let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// let mov = prompt("Один из последних просмотренных фильмов?");
// let reiing = prompt("На сколько оцените его?");
// let mov2 = prompt("Один из последних просмотренных фильмов?");
// let reiing2 = prompt("На сколько оцените его?");

// personalMovieDB.movies[mov] = reiing;
// personalMovieDB.movies[mov2] = reiing2;

// console.log(personalMovieDB);

// let string = "";

// for (let i = 1; i < 7; i++) {
//   for (let j = 1; j < i; j++) {
//     string += "*";
//   }
//   string += "/n";
// }

// ЗАДАНИЕ 2

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const mov = prompt("Один из последних просмотренных фильмов?");
  const reiing = prompt("На сколько оцените его?");

  if (
    mov != null &&
    reiing != null &&
    mov != "" &&
    reiing != "" &&
    mov.length < 50
  ) {
    personalMovieDB.movies[mov] = reiing;
    console.log("true");
  } else {
    console.log("FALSE");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("средний пользователь");
} else if (personalMovieDB.count > 30) {
  console.log("Киноман");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMovieDB);
