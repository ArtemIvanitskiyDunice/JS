"use strict";
// что будет выведено в консоль?
setTimeout(() => alert("timeout"));
Promise.resolve().then(() => setTimeout(() => alert("promise")));
alert("code");

// 1. "code" поскольку задача синхронная и сразу попадает в call stack
// 2. "timeout" помещается в очередь макротасков при завершении таймаута
// 3. "promise" помещается в очередь макротасков при выполнении микротаска промиса
