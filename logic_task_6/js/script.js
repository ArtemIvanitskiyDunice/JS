"use strict";
// Напишите функцию для бинарного поиска, она должна принимать отсортированный массив и элемент который ищем

function binarySearch(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (sortedArray[mid] === target) {
            console.log(`Элемент ${target} найден по индексу ${mid}`);
            return mid; // Элемент найден, возвращаем его индекс
        } else if (sortedArray[mid] < target) {
            left = mid + 1; // Искомый элемент в правой половине массива
        } else {
            right = mid - 1; // Искомый элемент в левой половине массива
        }
    }

    return console.log(`Элемент ${target} не найден в массиве`); // Элемент не найден
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetElement = 10;

const result = binarySearch(sortedArray, targetElement);
