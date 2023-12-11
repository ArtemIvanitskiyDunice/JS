"use strict";
// что будет выведено в консоль?
const bar = () => console.log("bar");
const baz = () => console.log("baz");
const foo = () => {
    console.log("foo");
    setTimeout(bar, 0);
    baz();
};
foo();

//foo, baz, bar
//1. foo - функция вызывается отдельно
//2. baz - функция вызывается внутри foo
//2. bar - функция вызывается с помощью setTimeout и попадает в очередь макрозадач
