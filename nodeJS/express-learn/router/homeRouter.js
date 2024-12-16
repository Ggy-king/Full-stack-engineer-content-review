// 实现路由模块化
const express = require('express')

// 创建路由对象
const router = express.Router()


// router.use()  // 路由中间件

router.get('/home',(req,res) => {
    res.send('首页')
})

router.get('/show',(req,res) => {
    res.send('展示')
})


// 暴露出router CommonJS语法
module.exports = router

