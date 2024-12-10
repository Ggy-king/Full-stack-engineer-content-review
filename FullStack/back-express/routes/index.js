var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('index')
});

router.get('/portrait', (req, res, next) => {
  res.send('文件上传后端返回')
});

router.post('/portrait', (req, res, next) => {
  // 需要处理的逻辑 接受简单类型及文件类型 -> 保存到public文件下 -> 返回出图片(或其他文件)的路径 -> 保存到数据库中
  //               -> 返回给前端调用时

  res.send('文件上传成功')
});


module.exports = router;
