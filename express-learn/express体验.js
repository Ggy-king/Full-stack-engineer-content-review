const express = require('express')

const app = express()  // 实例化

app.get('/home',(req,res) => {  // 其实理解与用法与http差不多
    res.end('hello')

})

app.listen('3000',() => {
    console.log('服务端已启动');
})