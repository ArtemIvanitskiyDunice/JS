"use strict";
// Напишите функцию которая сортирует массив по датам

function sortByDate(arr) {
    return arr.sort((a, b) => {
        // .split('.') для разделения компонентов даты
        // .reverse() для изменения порядка компонентов на 'YYYY.MM.DD'
        // .join('.') для объединения обратно
        const dateA = new Date(a.date.split(".").reverse().join("."));
        const dateB = new Date(b.date.split(".").reverse().join("."));
        // объекты будут отсортированы в соответствии с их датами в порядке возрастания
        return dateA - dateB;
    });
}

const arr = [
    { date: "10.01.2016" },
    { date: "11.01.2017" },
    { date: "05.11.2016" },
    { date: "21.12.2002" },
];

const sortedArr = sortByDate(arr);
console.log(sortedArr);
