// 封装FormModel演化的方法
// 建立数据库与后端操作的相关方法 简化路由中的代码

const FormModel = require('../models/FormModel')
const formidable = require('formidable')   // 这是一个处理多文件上传的包 比较好用



// 获取表单
const getFormMongo = (req, res, next) => {
    FormModel.find().sort({ data: -1 }).limit(1).exec().then(data => {
        // res.send(data)
        // 常见的后端是返回一个json格式
        res.json({
            // 响应编号
            code: '0000',
            // 响应信息
            message: '成功',
            // 响应数据
            data: data
        })
    }).catch(err => {
        res.json({
            code: '1001',
            message: '失败',
            data: err
        })
    })
}

// 添加表单

const setFormMongo = (req, res, next) => {
    // 1 创建表单对象
    const form = formidable({
        uploadDir: __dirname + '/../public/images',    // uploadDir 前端传入文件存放后端的位置
        keepExtensions: true     // 保持文件后缀
    });

    //2 解析请求报文
    form.parse(req, (err, fields, files) => {
        // fields  是一般字段 text radio checkbox select
        // files  file
        if (err) {
            next(err);
            return;
        }

        // 3 返回新文件路径保存至数据库 可以让前端访问数据时找到后端这个文件
        // /images/aaf6092067acb167464727900.png
        const imageUserUrl = '/images/' + files.portrait.newFilename
        FormModel.create({
            ...fields,
            imageUserUrl
        }).then(data => {
            res.json({
                // 响应编号
                code: '0000',
                // 响应信息
                message: '成功',
                // 响应数据
                data: data
            })
        }).catch(err => {
            res.json({
                code: '1001',
                message: '失败',
                data: err
            })
        })



    });
}

module.exports = {
    getFormMongo,
    setFormMongo
}