// 组件中只写成功的逻辑 要把失败的逻辑放在响应拦截器中

// 用于存放所有登录相关的接口请求
import request from '@/utils/request'

// 1 获取图形验证码
// 此处是按需导出 引入的时候需要 import {getPicCode} from '@/api/login'
export const getPicCode = () => {
    return request.get('/captcha/image')
}

// 2 获取短信验证码
export const getMsgCode = (captchaCode,captchaKey,mobile) => {
    return request.post('/captcha/sendSmsCaptcha',{
        form: {
            captchaCode,
            captchaKey,
            mobile
        }
    })
}