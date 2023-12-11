"use strict";
// что будет выведено в консоль?
setTimeout(() => console.log(1), 10);
setTimeout(() => console.log(2));
setTimeout(() => console.log(3), 0);
setTimeout(() => console.log(4), 5);

//В консоль выведутся 2, 3, 4, 1 в соответствии с заданными вторыми параметрами setTimeout
