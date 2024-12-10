var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/text', (req, res, next) => {   // 这里的路径是/users/text  外面有路由前缀
  res.send('测试页面');
});


module.exports = router;
