const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

// 中间件就是拦截器 在某些代码执行前执行
// 比如做一个全局中间件 实现日志功能记录每一次请求的路径及ip
function recordMiddleware(req, res, next) {   // 接受三个参数 next是执行完上面代码之后做什么
    let { url, ip } = req
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`)

    console.log(path.resolve(__dirname, './access.log'));
    next()  // 一定要调用 调用后才能向下走

}
app.use(recordMiddleware)  // 记得使用中间件 在进入其他路径代码执行前

// 做一个路由中间件
const checkCodeMiddleware = (req, res, next) => {   // 它不是全局不用use 而是放到需要使用的路由中，作为第二个参数
    if (req.query.code === '521') {
        next()  // 对了就执行下一项
    } else {
        res.send('query参数错误')
    }
}

// 做一个静态资源中间件 express.static(__dirname + '/public')就可以直接将文件夹public里的文件挂载到服务器上通过路径可直接访问
/**
 * 1 静态资源下的index.html 为默认响应 也就是你访问根目录时会自动匹配index.html
 * 2 代码是自上而下执行的 如果你在下面设了根目录的匹配 不会去执行 因为已经执行了上面的静态资源匹配
 * 3 像css 图片静态的都是交给这个中间件响应的
 */
app.use(express.static(__dirname + '/public'))



app.get('/home', (req, res) => {
    res.send('前台首页')
})

app.get('/admin', checkCodeMiddleware, (req, res) => {    // 放路由中间件作为校验
    res.send('管理员页面')
})

app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})

app.listen(3000, () => {
    console.log('服务端已开启....');
})