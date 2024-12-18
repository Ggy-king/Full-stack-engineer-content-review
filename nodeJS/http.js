// 126.35.86.12:21 -> 155.31.66.54:18   由一台服务器中的微信发往另一台服务器中的微信 这就是端口号的解释

// mime资源类型 用于Content-Type中表示类型  [类型]/[子类型]
/**
 * html: 'text/html'
 * css: 'text/css'
 * javascript: 'text/javascript'
 * png: 'image/png'
 * jpg: 'image/jpeg'
 * gif: 'image/gif'
 * mp4: 'video/mp4'
 * mp3: 'audio/mpeg'
 * json: 'application/json'
 */


// 1 导入http模块
const http = require('http')



// 2 创建服务对象
const server = http.createServer((request, response) => {
    // 在这里接收浏览器发送的请求体 并处理后返回给响应体 其实就是自己与自己玩   
    // 1 request.headers  request.url  // 请求头的内容
    let body = ''
    // 绑定事件 
    request.on('data', chunk => {
        // chunk就是事件流 一点一点取 data就是request的内容
        body += chunk
    })
    request.on('end', () => {
        console.log(body)
    })


    // 2 实例化url 获取全部url信息
    let url = new URL('http://127.0.0.1:9000/search?id=12&wd=hello')  // url变成实例化有各种方法属性
    let url2 = new URL(request.url, 'http://127.0.0.1')  // 这样写主要写一个ip即可
    url2.pathname


    // 3 设置响应状态码  状态码都可以自己给
    response.statusCode = 200
    response.statusCode = 203


    // 4 响应头
    response.setHeader('content-type', 'text/html;charset=utf-8') // 告诉浏览器你按什么格式解码
    response.setHeader('GGY-KING', ['one', 'two', 'three'])  // 自定义响应头并多组设置


    // 5 响应体
    response.write('write中设置响应体后一般就不会再end中再设置了 可以多次调用')
    response.end('你好 hello')  // 想要结束 必须要有end
})  // createServer接收一个回调函数 回调函数中接收两个形参





// 3 监听服务
server.listen(9000, () => {
    console.log('服务已启动...');
})