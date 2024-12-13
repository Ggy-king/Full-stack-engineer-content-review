const express = require('express');
const fs = require('fs')

const {setFormMongo,getFormMongo} = require('../controller/index')

var router = express.Router();


router.get('/', function (req, res, next) {
  res.send('index')
});

router.get('/portrait', (req, res, next) => {
  // 一 资源没有挂载需要后台上传访问
  // const url = __dirname + '/../public/images/a68f9ff050ee8e1c3d6814700.png'
  // fs.readFile(url,(err,data) => {
  //   if(err) return;
  //   res.send(data)
  // })

   //二 不需要使用fs读取这个文件 静态资源已经被挂载到服务上只需要访问图片路径即可
  //  const url2 = '/images/a68f9ff050ee8e1c3d6814700.png'
  //  res.send(url2)

  getFormMongo(req, res, next)
});

router.post('/portrait', (req, res, next) => {
  // 需要处理的逻辑 接受简单类型及文件类型 -> 保存到public文件下 -> 返回出图片(或其他文件)的路径 -> 保存到数据库中
  //               -> 返回给前端调用时

  setFormMongo(req, res, next)


});


module.exports = router;
