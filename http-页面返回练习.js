// 通过不同路径不同方法 返回不同内容
// 使用fs模块读取本地文件 挂载到response.end中


const http = require('http')
const fs = require('fs')

// 读文件
const loginHtml = fs.readFileSync(__dirname + '/login/login.html')
const loginCss = fs.readFileSync(__dirname + '/login/css/login.css')
const loginJs = fs.readFileSync(__dirname + '/login/js/login.js')

const server = http.createServer((request, response) => {

    // 设表头
    response.statusCode = 200
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.setHeader('GGY-KING', ['one', 'two', 'three'])  // 自定义响应头并多组设置

    // 创建url对象
    let url = new URL(request.url, 'http://127.0.0.1')

    const { method } = request
    const { pathname } = url


    // 判断页面并返回相应内容
    if (method === 'GET' && pathname === '/login') { // pathname就是返回自己设的除ip地址剩下的路径

        response.end('登录页面')

    } else if (method === 'GET' && pathname === '/reg') {
        response.end(loginHtml)
    } else if (method === 'GET' && pathname === '/js/login.js') {
        response.setHeader('content-type', 'application/javascript')
        response.end(loginJs)
    } else if (method === 'GET' && pathname === '/css/login.css') {
        response.setHeader('content-type', 'text/css')
        response.end(loginCss)
    }
    else {
        console.log(method);
        response.end('404')

    }

})

server.listen(9000, () => {
    console.log('已启动服务')
})