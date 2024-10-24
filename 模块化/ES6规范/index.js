import * as school from './school.js'  // 全部引入成school对象里面的属性方法 支持浏览器和node环境
import {name as  uname, getSchool as getS}  from './school.js'  // 命名导入a as b
import school2 from './school.js'  // 这样直接命名引入的是default默认导出的方法
import './student.js'  // 直接全部引入

async () => {
    await import('./school.js')    // 动态导入 import(./)
}

// node下运行 1 改文件后缀名为.mjs     2 为当前目录下添加package.json文件，文件里标注type类型为module即可

console.log(school)

// 在commonjs规范中在主文件操作 其实最终修改的是副文件里的语句 主文件拿到的是副文件的复制品
// 但在es6中就不会有这种事情，主文件操作主文件修改副文件也会修改

// es6主文件副文件同一变量是同一个内存空间