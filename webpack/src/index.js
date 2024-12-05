// 引入css  不支持打包css所以需要下载loader包
require('./css/init.css')
// 通过CommonJS规范导入show 函数
const show = require('./show.js')
// 执行show
show('已执行')