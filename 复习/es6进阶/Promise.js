// Promise承诺

// 相当于一个容器,用来保存未来才会结束的事件(异步)的一个结果
// 各种异步操作都可以用相同方式来处理

// 1 对象的状态是不受外界影响的 他会处理异步状态保存三个结果 Pending进行 Resolved成功 Rejected失败
// 2 一旦状态发生改变 就不会在变 而且任何时候都可以得到这个结果 pending->resolved 或 pending->rejected

const pro = new Promise(function (resolved, rejected) {  // 传的两个参数就是成功和失败时候的结果 Promise就是对这两个状态进行操作
    // 特别注意这个两个参数是函数 Promise就响当于构造函数了

    // 模拟一下异步操作
    const res = {
        // code: 200,
        code: 201,
        data: {
            uname: '高广源'
        },
        error: '数据获取失败'
    }

    // 1 上面基本就是后端返回的数据

    const { code } = res
    setTimeout(() => {
        if (code === 200) {
            resolved(res.data)  // 成功的时候用resolved()返回你要的东西 后面通过实例调用then拿到返回的结果
        } else {
            rejected(res.error)
        }
    }, 1000)

    // 2 上面就是我们前端拿到后端数据进行处理 因为你不确定后端的数据什么时候能来，所以是异步操作
})


pro.then((val) => {         // 进行下一步的操作用then 第一个参数是resolved第二个参数是rejected
    console.log('成功', val);
}, (err) => {
    console.log('失败', err);

})


// -------------------------------
// 进行封装 让参数可以修改 更灵活  常用写法创建一个参数可控的函数并返回一个新的Promise对象
function timeOut(ms) {
    return new Promise(function (resolved, rejected) {       // 意思很简单 你用Promise自然得new了，外面你还想用then自然得return出去了
        setTimeout(() => {
            resolved('success')
        }, ms);
    })
}

timeOut(2000).then((val) => {   // 链式调用 
    console.log('成功', val)
}, (err) => {
    console.log('失败', err)
})


// -------------------------------
// 举例子
getJSON(url)
    .then((data) => {
        console.log('成功', data);
    }, (error) => {
        console.log('失败', error);
    })