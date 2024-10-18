// axios基于XML封装 代码简单使用率很广
// axios() 是函数 传入对象 用then拿到结果(Promise)
import { axios } from './axios.min'
console.log(axios);

axios({ url:url1 })
    .then(res => {
        // 操作...

        return axios({ url:url1 })
    })

    .then(res => {
        // 操作2

        return axios({ url:url1,params:{username:'gao'} })
    })

    .then(res => {
        // 操作3

        return axios({ url:url1,method:'post',data:{data} })
    })

    .then(res => {
        // 操作4

    })

    