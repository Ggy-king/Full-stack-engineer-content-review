// 这里是路由主文件 模块化文件看router
const express = require('express')

const homeRouter = require('./router/homeRouter')   // 导入模块
const adminRouter = require('./router/adminRouter')   // 导入模块

const app = express()

app.use(homeRouter)  // 使用模块
app.use(adminRouter)  // 使用模块

app.all('*',(req,res) => {
    res.status(404)
    res.send('<h1>Not FOUNT</h1>')
})

app.listen(3000,() => {
    console.log('已启动');
})