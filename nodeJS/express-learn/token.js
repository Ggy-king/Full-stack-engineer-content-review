/**
 * token
 * 很类似session 都是通过发送请求来确定用户身份以及信息
 * 1 token是保存在用户端 需要手动发送 session是自动发送
 * 2 数据更安全是全部加密 可以避免CSRF(因为token是在请求头里的 不通过cookie发送)
 * 3 服务间可以共享 毕竟是在用户端 自然是可以携带着他访问不同服务
 * 4 增加服务器的扩展性 多台服务器想要共享sessions只能复制数据库 但token在用户端保存无需扩展数据库
 * 
 * JWT目前最流行的身份验证 可用于基于token的身份验证
 */

// 1 安装 jsonwebtoken包 nodejs中引入
const jwt = require('jsonwebtoken')

// 2 创建token
// jwt.sign(用户数据,加密字符串 ,配置对象)

// const token = jwt.sign({
//     username: '赵素葳',
//     loveFoot: 'noodles'
// },'ggy',{
//     expiresIn: 60 //单位秒 这个是token的生命周期
// })
// console.log(token);

let t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Iui1tee0oOiRsyIsImxvdmVGb290Ijoibm9vZGxlcyIsImlhdCI6MTczNDQxNTY5MSwiZXhwIjoxNzM0NDE1NzUxfQ.JFqbma-RJXccqQQbjeG2cjugyE-8cev-DZxEg7eEFf4'

// 3 校验token
// jwt.verify(token,加密字符,回调函数)
jwt.verify(t,'ggy',(err,data) => {
    if(err) return console.log('校验失败')
    console.log(data);
})