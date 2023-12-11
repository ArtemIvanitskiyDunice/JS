"use strict";
// что будет выведено в консоль?
setTimeout(() => console.log(1), 0);
setTimeout(() => console.log(2));
setTimeout(() => console.log(3), 0);
setTimeout(() => console.log(4));

//В консоль выведется 1, 2, 3, 4 по очереди, поскольку отсутствие второго параметра в setTimeout равно 0
