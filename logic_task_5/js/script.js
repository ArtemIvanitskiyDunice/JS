"use strict";
// Есть объект

const tree = {
    value: 1,
    next: [
        {
            value: 2,
            next: null,
        },
        {
            value: 2,
            next: {
                value2: 4,
                next: null,
            },
        },
    ],
};

// Задача: Написать функцию которая принимает объект и название ключа
// и рекурсивно просчитывает все значения по ключу в объекте

function sum(obj, key) {
    if (!obj) {
        return 0; // Возвращаем 0, если объект не передан
    }

    let total = 0;

    if (obj[key] !== undefined) {
        total += obj[key];
    }

    if (Array.isArray(obj.next)) {
        // Если объект - массив, суммируем значения в каждом элементе массива
        for (const item of obj.next) {
            total += sum(item, key);
        }
    } else if (typeof obj.next === "object") {
        // Если объект - обычный объект, суммируем значения в каждом свойстве
        total += sum(obj.next, key);
    }

    return total;
}

const result = sum(tree, "value");
console.log(result); // Выведет: 5 поскольку по условию нет ключа value2
