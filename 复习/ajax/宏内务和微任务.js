// ES6之后引入Promise对象 让js引擎也可以发起异步任务

// 异步内务分为宏内务和微任务

// 宏内务就是由浏览器执行的任务
// 1 js脚本执行事件(script)
// 2 setInterval setTimeout
// 3 ajax请求完成的事件 
// 4 用户交互事件


// 微内务就是js引擎执行的任务
// 1 Promise对象.then() 


// Promise本身是同步的 而then和catch回调函数是异步的



// 宏任务与微任务组成任务队列  宏任务队列 微任务队列
// ！！！！注意他会先执行微任务 也就是.then
