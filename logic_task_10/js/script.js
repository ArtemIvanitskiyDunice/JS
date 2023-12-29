"use strict";
//Написать функцию которая будет принимать строку и возвращать объект
function convertToObject(str) {
    const result = {};

    str.split("").reduce((acc, char) => {
        acc[char] = {};
        return acc[char];
    }, result);

    return result;
}

const result = convertToObject("abc");
console.log(result); // Выведет: { a: { b: { c: {} } } }
