const express = require('express')
const fs = require('fs')
const app = express()

/**
 * GET /login 显示表单网页
 * POST /login 获取表单中的用户名和密码
 */

app.get('/login',(req,res) => {
    
})

app.post('/login',(req,res) => {
    console.log(req.body);
    console.log(req.params);
})

app.listen(3000,() => {
    console.log('启动');
})