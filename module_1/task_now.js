/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    while (
      numberOfFilms == "" ||
      numberOfFilms == null ||
      isNaN(numberOfFilms)
    ) {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
  },
  removeFilms: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("средний пользователь");
    } else if (personalMovieDB.count > 30) {
      console.log("Киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function () {
    if (!personalMovieDB.privat) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      const yoursGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`);
      if (yoursGenres != null && yoursGenres != "") {
        personalMovieDB.genres[i] = yoursGenres;
      } else {
        i--;
      }
    }
    personalMovieDB.forEach();
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  forEach: function () {
    for (let i = 0; i < this.genres.length; i++)
      console.log(`Любимый жанр ${i + 1} - это ${this.genres[i]}`);
  },
};

personalMovieDB.writeYourGenres();
console.log(personalMovieDB);
