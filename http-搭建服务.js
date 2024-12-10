const http = require('http')
const fs = require('fs')
const path = require('path')

const mimes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
}

const server = http.createServer((request, response) => {
    if (request.method !== 'GET') {
        response.statusCode = 405
        response.end('<h1>405 Method Not Allowed</h1>')
    }

    let { pathname } = new URL(request.url, 'http://127.0.0.1')

    const root = __dirname + '/login'  // 静态根目录
    let filePath = root + pathname   // 采用拼接的方法

    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.setHeader('content-type', 'text/html;charset=utf-8')
            // 判断错误代号
            switch (err.code) {
                case 'ENOENT':
                    response.statusCode = 404
                    response.end('<h1>404 Not Found</h1>')
                case 'EPERM':
                    response.statusCode = 403
                    response.end('<h1>403 Forbidden</h1>')
                default:
                    response.statusCode = 500
                    response.end('<h1>500 Internal Server Error</h1>')

            }

            return
        }
        let ext = path.extname(filePath).slice(1)  // 获取文件后缀名
        let type = mimes[ext]  // 获取类型
        type ? response.setHeader('content-type', type)
            : response.setHeader('content-type', 'application/octet-stream') // 'application/octet-stream'是常见的下载效果
        if (ext === 'html') response.setHeader('content-type', type + ';charset=utf-8')

        response.end(data)
    })


})

server.listen(9000, () => {
    console.log('服务已启动...')
})


