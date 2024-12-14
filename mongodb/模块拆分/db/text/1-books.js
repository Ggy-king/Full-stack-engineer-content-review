/**
 * @description 书籍数据操作
 * @author 广源讲师
 */

const BookModel = require('../../models/BookModel')

!(async () => {
    //创建书籍
    await BookModel.create({
        name: '增肥计划',
        author: '赵素葳',
        price: 30,
        is_hot: true,
    })
    await BookModel.create({
        name: '减肥计划',
        author: '高广源',
        price: 78,
        is_hot: false,
    })
    console.log('创建书籍数据成功')

    // 获取书籍列表（获取增肥计划）
    const BookModelList = await BookModel.find({ name: '增肥计划' }).sort({ updateAt: -1 })
    console.log('获取成功', BookModelList)

    // 根据id获取单个

    // const id = '62e495905cab016ab1dbda9d'
    // const BookModel = await BookModel.findById(id)
    // console.log('id获取地址为', BookModel);

    // 更新收货地址


    // const id = '62e495905cab016ab1dbda9d'
    // const newData = {
    //     username: 'zhangsan',
    //     city: '大连市',
    //     department: 'xxx小区a已改',
    //     houseNumber: '门派号1a已改',
    //     name: '张三a已改',
    //     phone: '12451111111'
    // }
    // const BookModel = await BookModel.findOneAndUpdate(
    //     { _id: id, username: 'zhangsan' },
    //     newData,
    //     {
    //         new: true  //返回更新之后的最新数据(默认是false)
    //     }
    // )
    // console.log('更新数据执行成功')
})()