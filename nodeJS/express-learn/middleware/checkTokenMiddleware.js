const jwt = require('jsonwebtoken')

module.exports = (req,res,next) => {
    // 获取token
    const token = req.get('token')  // token是放在请求头里的
    // 判断
    if(!token) {
        return res.json({
            code: '2003',
            msg: 'token 缺失',
            data: null
        })
    }

    // 校验token
    jwt.verify(token,'ggy',(err,data) => {
        // 检测token是否正确
        if(err) {
            return res.json({
                code: '2004',
                msg: 'token校验失败',
                data: null
            })
        }
        // 保存用户信息  保存到req的user属性中在其他地方就更方便拿到用户信息
        req.user = data
        // 没有错误就执行其他操作了
        next()
    })

}