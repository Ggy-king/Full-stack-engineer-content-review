// 用户唯一标识的中间件检测

module.exports = (req, res, next) => {
    if (!req.session.username) {
        return res.redirect('/login')
    }
    next()
}