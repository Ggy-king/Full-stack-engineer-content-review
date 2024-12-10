// 拼接规范的绝对路径 常用
const path = require('path')

path.resolve(__dirname,'./path.js')  // resolve解决 将两个路径拼接一起成最终的绝对路径

path.sep // \ 是路径分隔符

// __filename是文件的绝对路径 __dirname不包括自己本身，只是本身文件所在位置

let str =  'C:\\Users\\HP\\Desktop\\复习\\nodeJS\\path.js'

path.parse(str) // 解析路径 获取相关信息

path.basename(str)  // 获取文件名，包括尾缀名

path.dirname(str) // 获取文件所在的文件夹名字

path.extname(str) // 获取文件的扩展名也就是尾缀名

