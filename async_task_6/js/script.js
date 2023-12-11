"use strict";
// что будет выведено в консоль?
function great() {
    console.log("Pre greating");
    return "Hello";
    console.log("Hellllllo there!");
}

function respond() {
    return setTimeout(() => {
        console.log("Pre respond");
        prompt("Hey!");
        console.log("HEYYYYYYY, you’re too slooow");
    }, 1000);
}

great();
respond();

// В консоль выведутся Pre greating, затем Pre respond.
// Поскольку функция great(), возвращает "Hello" дальнейший код внутри функции недоступен
// Затем выполнение кода в respond() остановится, пока пользователь не введет ответ в prompt или не закроет окно
// Если пользователь ввел ответ, в консоль выведется "HEYYYYYYY, you’re too slooow"
