"use strict";
// Исправьте функцию
// function sayHi() {
//     const argStr = arguments.join(':');
//     console.log(argStr);  // сработает и выведет 1:2:3
//   }
//   sayHi(1, 2, 3);

//Исправленная функция
function sayHi() {
    const argStr = [...arguments].join(":");
    console.log(argStr); // сработает и выведет 1:2:3
}

sayHi(1, 2, 3);

//с помощью спреад оператора превратил псевдомассив arguments в полноценный массив с присущими ему методами
