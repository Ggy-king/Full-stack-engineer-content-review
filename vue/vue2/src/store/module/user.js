// 模块化配置 日后vuex中的数据变多难以维护用 module分割
import { getInfo, setInfo } from '@/utils/storage'


export default {
    namespaced: true,   // 开启命名空间，这样组件中使用mapState('模块名',['数据'])就可以访问到该模块了
    // user模块
    state() {
        return {
            // userInfo: {
            //     username: '张三',
            //     password: 123456789
            // },
            userInfo: getInfo(),
            score: 80
        }
    },
    mutations: {
        setUser(state, newUserInfo) {
            state.newUserInfo = newUserInfo  // 更新vuex中数据

            setInfo(newUserInfo)  // 本地持久化
        }
    },
    actions: {
        // 这里写的异步最终都要调用mutations
        setUserSecond(context, newUserInfo) {
            setTimeout(() => {
                // 调用mutations
                context.commit('setUser', newUserInfo)
                context.commit('setting/setColor',[],{root: true})   // {root: true}是开启全局开启查找module 找其他模块下的东西
            }, 1000);
        }
    },
    getters: {
        UpperCaseName(state) {
            return state.userInfo.username.toUpperCase()
        }
    }

}
