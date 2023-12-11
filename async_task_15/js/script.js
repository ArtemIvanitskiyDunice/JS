"use strict";
// что будет выведено в консоль?
Promise.all([
    Promise.reject(1),
    Promise.resolve(2),
    Promise.reject(3),
    Promise.resolve(4),
])
    .then((data) => console.log("data", data))
    .catch((error) => console.log("error", error));

// В консоли будет error 1
// Так как в массиве Promise.all есть отклоненные промисы, Promise.all будет отклонен с первым отклоненным значением
