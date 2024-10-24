// 1 创建XML对象
// 2 配置请求方法和请求url地址
// 3 监听loadend事件 接受响应结果
// 4 发起请求

// get
const xhr = new XMLHttpRequest()
xhr.open('get',url)
xhr.addEventListener('loadend', () => {
    JSON.parse(xhr.response)
})
xhr.send()



// URLSearchParams加toSting方法实现?查询参数拼接
const obj = new URLSearchParams({
    username:'张三',
    password: 123456
})
obj.toString()



// post
const xhr1 = new XMLHttpRequest()
xhr1.open('post',url) 
xhr1.addEventListener('loadend', () => {
    // 约定和服务器交换数据的类型 也就是设置请求头
    xhr1.setRequestHeader('Content-Type','application/json')

})
xhr1.send(JSON.stringify(user))   // 发送请求体 user是对象

