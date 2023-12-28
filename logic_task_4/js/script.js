"use strict";
// Написать метод массивов reverse через рекурсию

function reverseArrayRecursive(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        // Обмен значений между начальным и конечным элементами
        [arr[start], arr[end]] = [arr[end], arr[start]];

        // Рекурсивный вызов для уменьшения интервала
        reverseArrayRecursive(arr, start + 1, end - 1);
    }

    // Возвращаем измененный массив
    return arr;
}

// Пример использования
const myArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArrayRecursive([...myArray]); // Создаем копию массива, чтобы не изменять оригинал
console.log(reversedArray); // Выведет: [5, 4, 3, 2, 1]
