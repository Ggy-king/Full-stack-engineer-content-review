// 实现路由模块化
const express = require('express')

// 创建路由对象
const router = express.Router()


// router.use()  // 路由中间件


router.get('/admin',(req,res) => {
    res.send('后台')
})

router.get('/set',(req,res) => {
    res.send('设置')
})


// 暴露出router CommonJS语法
module.exports = router

