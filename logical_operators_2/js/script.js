"use strict";
let firstName = "";
let lastName = "";
let nickName = "Суперкодер";

alert(firstName || lastName || nickName || "Аноним"); // Суперкодер
//ИЛИ || возвращает первое истинное значение или последнее, если такое значение не найдено. В данном случае это переменная nickName, содержащая в себе строку
