"use strict";
// что будет выведено в консоль?
Promise.resolve("1")
    .then((data) => console.log(data))
    .then((data) => {
        console.log(data);
        return "2";
    })
    .then((data) => console.log(data));

// В консоль выведутся 1 undefined 2
// Первый then выводит в консоль 1, переданный параметр в resolve, и возвращает undefined
// Второй then выводит undefined первого then и возвращает 2
// Третий then выводит в консоль переданную 2 из второго then
