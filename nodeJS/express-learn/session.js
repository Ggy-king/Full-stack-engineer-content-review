// session是一种会话机制 与sessionStorage不是一个东西！！！
// session就是利用cookie发送sessionid给客户端 session会记录一些用户信息保存在数据库中，通过id访问
// 就是程序员自己设置的 自己创造的 所以都需要用三方库实现 express-session connect-mongo

const express = require('express')
// 1 安装引入 npm i express-session connect-mongo // connect-mongo包是演示作用
const session = require('express-session')
const MongoStore = require('connect-mongo')

const app = express()
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



app.listen(9000, () => {
    console.log('成功启动服务');
})