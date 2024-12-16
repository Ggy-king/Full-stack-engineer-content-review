const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()

/**
 * 防盗链
 * 使用referer实现 特殊资源浏览器会携带referer请求头信息 是一个域名可以判断只要是不是我们自己的域名其他域名访问都给一个404
 * 减少服务器压力 还可以使用 其他的方法实现
 * 使用中间件 在所以访问前判断一下
 */

app.use((req, res, next) => {
    const referer = req.get('referer')    // 要记住主要特殊资源才有referer referer的安全性比hostname高
    if (referer) {  // 只有从一个网站向另一个网站跳转时才有 第一次进可能没有
        const url = new URL(referer)  // 实例化一个url
        const hostname = url.hostname   // 去获取我们传进去的url的host 也就是协议与端口我们不要 我们只要域名部分
        if(hostname !== '127.0.0.1') {
            res.status(404).send('<h1>404</h1>')
            return
        }
    }
    next()
})

app.use(express.static(__dirname + '/public'))



/**
 * GET /login 显示表单网页
 * POST /login 获取表单中的用户名和密码
 * 要使用body-parser这个中间件 自己没有办法拿到post请求体的内容
 */
// 封装body-parser
const jsonParser = bodyParser.json() // 解析json格式的请求体数据 转成对象
const urlencodedParser = bodyParser.urlencoded({ extended: true })  // 解析query格式的请求体数据 转成对象


app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/form.html')
})


app.post('/login', urlencodedParser, (req, res) => {   // 中间的函数就是处理函数 处理完之后便返回
    console.log(req.body);
    const { username, password } = req.body
    fs.appendFileSync(`${__dirname}/access.log`, `username:${username};password:${password}\r\n`)  // 如果使用path.resolve可以跨平台兼容路径
    res.send('注册成功')
})










app.listen(3000, () => {
    console.log('启动');
})