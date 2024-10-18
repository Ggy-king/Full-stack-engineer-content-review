// Promise  所有的异步任务都会有一个成功或者失败的结果

const p = new Promise((resolved, rejected) => {
    // 我会立即执行
    // 在回调函数中可以执行异步任务
    // resolved 成功
    // rejected 失败
    resolved('传出去成功的数据')
    rejected('传出去失败的数据')

    // 把回调的结果从里面传出来
})

p.then(res => {

}).catch(err => {

})


// Promise的静态方法
Promise.all([Promise对象,Promise对象, ...]).then(res => res)   //这个时候只有所有的Promise对象都是resolved的时候才会执行then  结果也是数组





const pro = new Promise((resolved, rejected) => {
    const xhr = new XMLHttpRequest()
    xhr.open('get', url)
    xhr.addEventListener('loadend', () => {

        if (xhr.status >= 200 && xhr.status < 300) {

            resolved(JSON.parse(xhr.response))
        } else {
            rejected(xhr.response)
        }
    })
    xhr.send()
})

pro.then(res => {

}).catch(err => {

})

// // 手动封装axios
// function myAxios(config) {
//     return new Promise((resolved, rejected) => {

//         if (config.params) {
//             const obj = new URLSearchParams(config.url)
//             config.url += `?${obj.toString()}`

//         }

//         const xhr = new XMLHttpRequest()
//         xhr.open(config.method || 'GET', config.url)
//         xhr.addEventListener('loadend', () => {

//             if (xhr.status >= 200 && xhr.status < 300) {

//                 resolved(JSON.parse(xhr.response))
//             } else {
//                 rejected(new Error(xhr.response))
//             }
//         })

//         if (config.data) {
//             xhr.setRequestHeader('Content-Type', 'application/json')
//             xhr.send(JSON.stringify(config.data))
//         } else {
//             xhr.send()
//         }

//     })
// }


// myAxios({
//     url: 'http',

// }).then(res => {

// }).catch(err => {

// })


// Promise链式调用 解决回调地狱
const ph = new Promise((resolved, rejected) => {
    setTimeout(() => {
        resolved('向下一个传递1')
    }, 500)
})


ph
    .then(res => {
        return new Promise((resolved, rejected) => {
            setTimeout(() => {
                resolved(res + '向下一个传递2')
            }, 500)
        })
    })
    .then(res => {
        return new Promise((resolved, rejected) => {
            setTimeout(() => {
                resolved(res + '向下一个传递3')
            }, 500)
        })
    })
    .then(res => {
        return new Promise((resolved, rejected) => {
            setTimeout(() => {
                resolved(res + '向下一个传递4')
            }, 500)
        })
    })

// 通过多次在then中创建new Promise对象实现链式调用