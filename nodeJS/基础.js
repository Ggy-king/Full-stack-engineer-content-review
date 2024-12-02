// 1 nodeAPI
/**
 * 注意 浏览器API主要有DOM BOM ajax storage console 定时器 alert/confirm
 * 浏览器的api肯定是不能运行在node环境中的 浏览器与node相似点是都是遵循ecmaScript语法
 * nodeAPI有
 * fs
 * url
 * http
 * util
 * console
 * 定时器
 * path
 */

// 2 global顶级对象 globalThis是指向顶级对象的 globalThis === global

// 3 Buffer 缓冲区 是一个类似于Array的对像，用于表示固定长度的字节序列(固定长度的内存空间)
// 创建
let buf = Buffer.alloc(10)  //创建一个10字节的buffer
let buf_2 = Buffer.allocUnsafe(10)  // 这个方法创建的buf会包含旧的内存数据，优点是创建快
let buf_3 = Buffer.from('你好')  // from方法创建 ascii十六进制保存
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
// 操作
buf_4.toString()        // 默认utf-8转化方式 转化成字符串
buf_3[0]                // buf_3[0]读取buf第一个元素 默认十进制表示 
buf_3[0].toString(2)    // 与上面的转成字符串不一样 这里是转化成2进制
buf_3[0] = 45           // 直接修改

// 4 进程 程序运行
// 5 线程 线程是进程中的一个执行流 一个线程是属于某个进程的