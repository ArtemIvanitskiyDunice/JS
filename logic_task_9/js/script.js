"use strict";
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
function aclean(arr) {
    const anagramMap = new Map();

    for (let word of arr) {
        const sortedWord = word.toLowerCase().split("").sort().join("");

        anagramMap.set(sortedWord, word); // Добавление слов в Map по уникальному ключу
    }

    return Array.from(anagramMap.values()); //возвращает массив слов добавленных в Map по уникальному ключу
}

const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));
