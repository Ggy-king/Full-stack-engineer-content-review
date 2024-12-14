const mongoose = require('mongoose')

// 1 连接服务
mongoose.connect('mongodb://127.0.0.1:27017/ZSW')   // 协议是mongodb ip地址是127.0.0.1 端口号是27017 数据库是admin

// 2 设置连接回调

// mongoose.connection.on('open', () => {   // 连接操作中 监听连接成功时的回调
//     console.log('连接成功');
// })

mongoose.connection.once('open', () => {   // 连接操作中 once只执行一次官方推荐 监听连接成功时的回调
    // 比如掉线后再此上线once就不会执行open 但是on会再次执行open 了解即可 反正once是官方推荐
    console.log('once监听 连接成功');

    // 一般将后续操作放在open函数中 等以后用async做
    // 3 创建文档的结构对对象 就是我们要存放哪些属性 值的类型是什么
    const BookSchema = new mongoose.Schema({
        name: String,
        author: {
            type: String,
            required: true, // 设置是否必填
            default: '赵素葳是默认',  // 不传的话默认是什么
        },
        price: {
            type: Number,
            enum: [15, 56, 89, 753, 456], // 枚举值 用户传的必须是这些值其中之一
        },
        pub_time: {
            type: Date,
            unique: true   // 表示为唯一值 就是文档中只能出现一次 必须是重建文档才有效
        },
        is_hot: Boolean,
        tags: Array,
    })

    // 4 创建模型对象  就是我们的文档结构对象与我们的集合相互绑定 并且封装文档的对象赋予方法属性等
    const BookModel = mongoose.model('books', BookSchema)  // 第一个参数是集合 第二个是需要与集合绑定的文档对象

    // 5 新增文档数据
    BookModel.create({
        name: '肥计划',
        author: '赵素葳',
        price: 19.9,
        is_hot: true,
        tags: ['热血', '医学'],
        pub_time: new Date().toUTCString()

    }).then(res => {
        console.log(res);
    })

    // 6 删除数据
    BookModel.deleteOne({ _id: '41654651184189418ass8f4ds8' }).then(res => {  // 单个删除
        console.log(res);
    })

    BookModel.deleteMany({ name: '肥计划' }).then(res => {  // 多个删除
        console.log(res);
    })

    // 7 更新数据
    BookModel.updateOne({ name: '减肥计划' }, { price: 48 }).then(res => {   // 只会修改同名属性 第一个是查找 第二个是修改属性值
        console.log(res);
    })
    BookModel.updateMany({ name: '减肥计划' }, { price: 48 }).then(res => {   // 只会修改同名属性 第一个是查找 第二个是修改属性值
        console.log(res);
    })

    // 8 读取文档
    BookModel.findOne({ author: '高广源' }).then(res => {
        console.log(res);
    })
    BookModel.findById('1sd8s489sa481d8s41d8as').then(res => {  // 通过id获取
        console.log(res);
    })
    BookModel.find().then()  // 可以无条件都取出来
    BookModel.find({ author: '雨花' }).then()


    BookModel.find({ price: { $gt: 20 } })  // $gt: 20  查找大于20  $lt: 小于 $gte大于等于 $lte小于等于 $ne不等于
    BookModel.find({ $or: [{},{}] })  // $or: [{},{}] 逻辑或 第一个或第二个
    BookModel.find({ $and:[{},{}] })  // $and: [{},{}] 逻辑与 两个都满足才返回
    BookModel.find({ name: /三/})  // 正则表达式 用于模糊查询  找出所以名字有三的数据


})


mongoose.connection.on('error', () => {   // 连接操作中 监听连接失败时的回调
    console.log('连接失败');

})

mongoose.connection.on('close', () => {   // 连接操作中 监听连接关闭时的回调
    console.log('连接关闭');

})

// 关闭连接
// mongoose.disconnect()