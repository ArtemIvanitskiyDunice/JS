"use strict";
// что будет выведено в консоль?
setTimeout(() => alert("timeout"));
Promise.resolve().then(() => alert("promise"));
alert("code");

// 1. "code" поскольку задача синхронная и сразу попадает в call stack
// 2. "promise" поскольку задача микротаск и попадает в call stack сразу по завершению синхронных задач
// 3. "timeout" поскольку задача макротаск и попадает в call stack по завершению микротасков
