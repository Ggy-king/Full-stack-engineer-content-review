const express = require('express')
// 提示 可以直接导入json文件作为对象使用 用require导入


const app = express()

app.get('/', (req, res) => {
    res.end('home get')
})

// 查询参数
app.get('/shop', (req, res) => {
    const method = req.method  // 请求方法
    const url = req.url  // 请求路径
    const httpVersion = req.httpVersion  // 请求http版本协议
    const headers = req.headers  // 请求头信息
    console.log(method,url,httpVersion,headers);


    // express封装的方法属性
    const urlPathname = req.path  // 获取pathname路径 不包括ip与后面查询
    const query = req.query   // 获取查询字符串
    const ip = req.ip
    const host = req.get('host')   // 单独获取某方式某请求头
    console.log(urlPathname,query,ip,host);

    res.end(`shop get`)
})

// 路由参数
app.get('/:id.html', (req, res) => {    // 路由占位符 id可以是任意值
    const params = req.params
    const id = req.params.id
    console.log(params,id);

    res.setHeader('content-type','text/html;charset=utf-8')
    res.end(`匹配所有以/xxx.html的路径  赵书赫`)
})

// 响应
app.get('/set',(req,res) => {
    // express封装一般响应
    res.status(500)
    res.set('aaa','123')  // express封装的设置响应头的方法
    res.send('你好美丽的小姐')  // 他会自动设置html格式的响应头 无需你自己添加

    res.status(500).set('aaa','123').send('你好') // 支持链式调用

    // express封装其他响应
    res.redirect('https://www.baidu.com')   // 重定向
    res.download(__dirname + '/基础.js')   // 下载   不要是./ 是 /
    res.json({        // 他会自动设置响应头是json响应
        name: '高广源'   
    })
    res.sendFile(__dirname + '/form.html')   // 发送文件内容至网站
})

app.post('/login', (req, res) => {
    res.end('login post')
})

app.all('/text', (req, res) => {   // .all 请求方法随意 只要路径匹配即可
    res.end('text all');
})

app.all('*', (req, res) => {   // 响应所有方法的所有路径
    res.end('404');
})

app.listen(3000, () => {
    console.log('服务器已启动')
})