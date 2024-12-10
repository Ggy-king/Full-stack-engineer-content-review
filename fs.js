// 1 介绍
// fs模块可以实现与硬盘的交互,列如文件的读写创建删除重命名 文件夹的相关操作
// 学习fs模块有必要 比如他人访问我们的网站我们想记录访问时间 就可以通过常见日志文件的方式


// -----2 writeFile
const fs = require('fs')   // 导入fs模块 
fs.writeFile('./新建fs测试文件.txt','文本内容',err => {  // 异步
    // 写入失败 err就是错误对象 写入成功 err就是null
    console.log(err);
})  // 创建文件 一共四个参数: 文件名、文件内容、配置对象、回调函数

fs.writeFileSync()  // 同步写入 Sync同步


// -----3 appendFile
fs.appendFile('./新建fs测试文件.txt','我是追加文本',err => {  // 异步 追加文本内容
    console.log(err);
}) // appendFile参数与writeFile参数一样

fs.appendFileSync() // 同步


// -----4 createWriteStream 
let ws = fs.createWriteStream('./新建fs测试文件.txt') // 流式写入 适合于写入频次比较高的场景。开启通道

ws.write('第一行\r\n')
ws.write('第二行\r\n')
ws.write('第三行\r\n')
ws.write('第四行\r\n')

ws.close() // 关闭通道


// -----5 readFile 读取
fs.readFile('./新建fs测试文件.txt',(err,data) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(data,data.toString())  // data是内容 默认返回buf
}) // 三个参数 路径 配置对象 回调函数

fs.readFileSync() // 同步


// -----6 createReadStream
const rs = fs.createReadStream('./影音.mp4') // 创建读取流 流式读取一块一块读
rs.on('data',chunk => {    // 绑定data事件 chunk是块的意思
    console.log(chunk.length)  // 65536 => 64kb 每一次读64kb
})


// -----6   rename
fs.rename('./新建fs测试文件.txt','./fs测试文件.txt',err => {
    console.log(err);
})  // 重命名 
fs.rename('./新建fs测试文件.txt','../webpack/fs测试文件.txt',err => {
    console.log(err);
})  // 文件的移动

fs.renameSync()



// -----7   unlink 删除 rm 删除
fs.unlink('./新建fs测试文件.txt',err => {
    console.log(err)
})  // unlink删除
fs.rm('./新建fs测试文件.txt',err => {
    console.log(err)
}) // rm删除

fs.unlinkSync() // 同步
fs.rmSync() // 同步


// -----8   mkdir 创建文件夹 mk make; dir directory文件夹;
fs.mkdir('./html',{recursive: true} ,err => {
    console.log(err);
})  // 中间配置对象参数可省 recursive:true是可以创建 ./a/b/c这样的目录


// -----9   readdir 读取文件夹 rm 删除文件夹
fs.readdir('./html',(err,data) => {
    console.log(err,data);
})
fs.rm('./html',{recursive: true},err => {
    console.log(err)
}) // recursive 加上这个可以删除空文件夹


// -----10   stat status缩写 状态
fs.stat('../AI编程/简介.txt', (err, data) => {
    if(err) {
        console.log('失败');
        return
    }
    console.log(data)
    // data中有全部的文件信息 后续可以用它拿到文件的大小 创建时间等
    data.size() // 大小
    data.mtime() // 时间
})


// -----10   __dirname  保存代码所在目录的绝对路径 就是文件在哪，它就记录哪的文件路径
fs.writeFile(__dirname + '/index.html','love')


