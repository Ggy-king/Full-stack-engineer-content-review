const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
    let { pathname } = new URL(request.url, 'http://127.0.0.1')

    const root = __dirname + '/login'  // 静态根目录
    let filePath = root + pathname   // 采用拼接的方法

    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.statusCode = 500;
            response.end('文件读取失败')
            return
        }
        response.end(data)
    })


})

server.listen(9000, () => {
    console.log('服务已启动...')
})


