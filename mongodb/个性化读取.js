const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/node')

mongoose.connection.once('open', () => {
    console.log('open');
    const BookSchema = mongoose.Schema({
        name: {
            type: String,
            required: true,
            default: '无名书'
        },
        author: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            enum: [12, 45, 78, 96, 30]
        },
        is_hot: Boolean
    })

    const BookModel = mongoose.model('books', BookSchema)   // 将集合与数据对象绑定
    BookModel.create({
        name: '增肥计划',
        author: '赵素葳',
        price: 30,
        is_hot: true,
    })


    
    // 开始个性化读取了 设置字段 1 是要的字段 0 是不要的字段。 不写的属性都不会返回 返回需要的属性
    // select({}) 是筛选属性1为要0为不要  sort({})是排序 skip()跳过多少条数据 limit()限定多少条数据
    BookModel.find().select({ name: 1, author: 1, _id: 0 }).exec().then(res => console.log(res))
    BookModel.find().select({ author: 1, price: 1, _id: 0 }).sort({ price: 1 }).exec().then(res => console.log(res))

    // 数据排序加数据截取
    BookModel.find().select({ author: 1, price: 1, _id: 0 })
    .sort({ price: -1 }).skip(5).limit(5)
    .exec().then(res => console.log(res))


})

mongoose.connection.on('error', () => {
    console.log('error');
})

mongoose.connection.on('close', () => {
    console.log('close');
})