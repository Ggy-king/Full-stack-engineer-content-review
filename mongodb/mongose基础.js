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
        author: String,
        price: Number,
        is_hot: Boolean,
        tags: Array,
        pub_time: Date
    })

    // 4 创建模型对象  就是我们的文档结构对象与我们的集合相互绑定 并且封装文档的对象赋予方法属性等
    const BookModel = mongoose.model('books',BookSchema)  // 第一个参数是集合 第二个是需要与集合绑定的文档对象

    // 5 新增文档数据
    BookModel.create({
        name: '增肥计划',
        author: '赵素葳',
        price: 19.9,
        is_hot: true,
        tags: ['热血','医学'],
        pub_time: new Date().toUTCString()

    }).then(res => {
        console.log(res);
    })
})


mongoose.connection.on('error', () => {   // 连接操作中 监听连接失败时的回调
    console.log('连接失败');

})

mongoose.connection.on('close', () => {   // 连接操作中 监听连接关闭时的回调
    console.log('连接关闭');

})   

// 关闭连接
// mongoose.disconnect()