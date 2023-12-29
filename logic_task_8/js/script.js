"use strict";
// Есть несколько слов, определить состоят ли они из одних и тех же букв('кот', 'ток', 'окт')
function areAnagrams(...words) {
    const sortedWords = words.map((word) => word.split("").sort().join("")); // Сортируем каждое слово в полученном массиве, получив [ 'кот', 'кот', 'кот' ]

    return new Set(sortedWords).size === 1; // Внутри Set получаем одно уникальное 'кот'
}

const result = areAnagrams("кот", "ток", "окт");
console.log(result); // Выведет: true
