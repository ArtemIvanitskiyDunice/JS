"use strict";
// Что будет в консоли?

let a = 1;
function foo() {
    if (!a) {
        var a = 10;
    }
    console.log(a);
}

function bar() {
    a = 10;
    return;
    function a() {}
}

foo(); //выведет в консоль 10, поскольку var имеет функциональную область видимости и игнорирует блок if
bar(); // не изменит значение a, поскольку ничего не возвращает
console.log(a); // выведет let a = 1, заданное в начале
