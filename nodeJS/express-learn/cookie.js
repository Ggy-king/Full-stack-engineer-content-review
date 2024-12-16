const express = require('express')
const cookieParser = require('cookie-parser')  // 这是一个读取cookie的插件


const app = express()
app.use(cookieParser())  // 使用cookieParser中间件


// 知道cookie是什么吗 就是浏览器中的一块数据 存储的格式就是queryString 
// 他的作用就是携带信息给服务端 让服务端分辨出是哪个用户在访问
app.get('/set-cookie',(req,res) => {
    res.cookie('name','gao')  // 设置cookie 设置成功后每一次的请求与响应自动带上cookie
    res.cookie('age','18',{maxAge: 60 * 1000})  // maxAge为当前cookie的生命 单位毫秒
    res.send('添加cookie')
})

app.get('/remove-cookie',(req,res) => {
    res.clearCookie('name')  // 清除cookie
    res.send('删除cookie')
})

app.get('/get-cookie',(req,res) => {
    req.cookies  // 访问cookies是请求头里的数据
    res.send('访问cookie')
})



app.listen(9000,() => {
    console.log('成功启动服务');
})