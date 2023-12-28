"use strict";
//Можно ли записать в одну строку?

// let arr2 = new Array(50);

// for (let i = 0; i<arr2.length; i ++) {
// 	arr2[i] = i + 1;
// }

// console.log('arr2', arr2)

// Запись в одну строку, сложность алгоритма линейная O(n), ускорить алгоритм нельзя
// Код создает новый массив, используя объект { length: 50 } в качестве параметра Array.from и колбэк, который заполняет массив значениями от 1 до 50
const arr2 = Array.from({ length: 50 }, (_, index) => index + 1);
console.log("arr2", arr2);
