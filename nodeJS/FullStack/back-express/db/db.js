/**
 * @description mongoose 连接数据库
 * @author 广源讲师
 */

const mongoose = require('mongoose')

const dbHOST = 'mongodb://127.0.0.1'
const dbPORT = 27017
const dbNAME = 'nodeTwo'

mongoose.connect(`${dbHOST}:${dbPORT}/${dbNAME}`,{})

const db = mongoose.connection   // 连接对象

db.on('error', err => {
    console.log('连接失败见如下原因');
    console.log('连接错误', err);
})

db.once('open', () => {
    console.log('mongoose连接成功');
    console.log('---------------------------------');
    console.log('开始执行');

})

module.exports = mongoose