// 会话控制  就是分辨到底是谁发的请求 应该返回什么数据



/**
 * cookie
 * session
 * token
 */

/**
 * 1 cookie
 * cookie就是保存在浏览器中的一小部分数据
 * cookie是按照域名划分的
 * 域名  键值(queryString)
 * 
 * cookie是发在请求头里
 * 响应返回也是放在响应头里 检测到cookie便自动保存本地
 * 每次发送浏览器会自动携带cookie 只要是在域名下的 任意请求都会带cookie
 */
const express = require('express')

const app = express()
app.get('/set', (req, res) => {
    res.cookie('name', 'zhangsan')  // 这种设置cookie的方式会在浏览器关闭的时候自动销毁
    res.cookie('name', 'lisi', { maxAge: 60 * 1000 })  // 可以设置存储时间 即使浏览器销毁也会在 单位毫秒
})

app.get('/remove', (req, res) => {
    res.clearCookie('name')  // 删除cookie

})

// 如何拿到请求的cookie 需要用到第三方包 cookie-parser
const cookieParser = require('cookie-parser')
app.use(cookieParser())  // 中间件
app.get('/get', (req, res) => {
    req.cookies  // 获取cookie

})

/**
 * 2  session
 * session是一种会话机制 与sessionStorage不是一个东西！！！
 * session就是利用cookie发送sessionid给客户端 
 * session会记录一些用户信息保存在数据库中，通过id访问
 * 就是程序员自己设置的 自己创造的 所以都需要用三方库实现 express-session connect-mongo
 * 
 * 注意 session与登录注册检验无关 它只是返回一个用户唯一标识
 * 通过这个标识可以更方便拿到用户的网站存储信息 也无需每次都让用户登录验证
 */

// 
// 
// 

// 1 安装引入 npm i express-session connect-mongo // connect-mongo包是演示作用
const session = require('express-session')
const MongoStore = require('connect-mongo')

// 2 设置中间件 自动创建sessions集合
app.use(session({
    name: 'sid',  // 设置cookie的名字 也就是发送cookie传递唯一标识
    secret: 'ggy',  // 设置秘钥 又称签名
    saveUninitialized: false,   // 是否为每一次请求都设置一个session对象
    resave: true, // 是否每次请求时都重新保存session 也就是session有生命周期你一直操作就一直有session就不用登录
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/nodeTwo'
    }),
    cookie: {
        httpOnly: true, // 开启后前端无法通过document.cookie查看 安全性高
        maxAge: 1000 * 60 * 5 // 数据库与该cookie的生命周期
    }

}))

// 3 登录  设置session
app.get('/login', (req, res) => {
    // 拿到query中username与password 
    if (req.query.username === 'admin' && req.query.password === '1234567') {

        // 设置session 上面密码验证是其他逻辑 session只是满足存储用户信息功能 
        req.session.username = req.query.username
        req.session.password = req.query.password
        res.send('登录成功')
    } else {
        res.send('登录失败')
    }

})

// 4 读取
app.get('/cart', (req, res) => {
    // 判断用户唯一标识是否存在 虽然你设置很多参数在标识里 但你只需要判断一个参数在不在即可插件会帮你分析的
    if (req.session.username) {

        res.send(`你好，${req.session.username},您的密码是${req.session.password}`)
    } else {
        res.send('您未登录')
    }

})

// 5 销毁
app.get('/logout', (req, res) => {
    req.session.destroy() // 销毁
    res.send('退出成功')
})



/**
 * 3 token
 * 很类似session 都是通过发送请求来确定用户身份以及信息
 * 1 token是保存在用户端 需要手动发送 session是自动发送
 * 2 数据更安全是全部加密 可以避免CSRF(因为token是在请求头里的 不通过cookie发送)
 * 3 服务间可以共享 毕竟是在用户端 自然是可以携带着他访问不同服务
 * 4 增加服务器的扩展性 多台服务器想要共享sessions只能复制数据库 但token在用户端保存无需扩展数据库
 * 
 * JWT目前最流行的身份验证 可用于基于token的身份验证
 */

// 1 安装 jsonwebtoken包 nodejs中引入
const jwt = require('jsonwebtoken')

// 2 创建token
// jwt.sign(用户数据,加密字符串 ,配置对象)

const token = jwt.sign({
    username: '赵素葳',
    loveFoot: 'noodles'
},'ggy',{
    expiresIn: 60 //单位秒 这个是token的生命周期
})
console.log(token);

let t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Iui1tee0oOiRsyIsImxvdmVGb290Ijoibm9vZGxlcyIsImlhdCI6MTczNDQxNTY5MSwiZXhwIjoxNzM0NDE1NzUxfQ.JFqbma-RJXccqQQbjeG2cjugyE-8cev-DZxEg7eEFf4'

// 3 校验token
// jwt.verify(token,加密字符,回调函数)
jwt.verify(t, 'ggy', (err, data) => {
    if (err) return console.log('校验失败')
    console.log(data);
})








app.listen(9000, () => {
    console.log('成功启动服务');
})