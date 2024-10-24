// index一般是入口文件  一般在node环境下执行 不支持浏览器环境
const school = require('./school.js')     // require是导入语法  school拿到的是对象对象里包换对应的文件的暴露的属性方法
const {name} = require('./student.js')    

// 在commonjs规范中在主文件操作 其实最终修改的是副文件里的语句 主文件拿到的是副文件的复制品
// commonjs中主副文件的同一变量不是同一内存 主是复制品