// 模块化配置 日后vuex中的数据变多难以维护用 module分割

// user模块
const state = {
    userInfo: {
        username: '张三',
        password: 123456789
    },
    score: 80
}
const mutations = {
    setUser(state,newUserInfo) {
        state.newUserInfo = newUserInfo
    }
}
const actions = {
    // 这里写的异步最终都要调用mutations
    setUserSecond(context,newUserInfo) {
        setTimeout(() => {
            // 调用mutations
            context.commit('setUser',newUserInfo)
        }, 1000);
    }
}
const getters = {
    UpperCaseName(state) {
        return state.userInfo.username.toUpperCase()
    }
} 

export default {
    namespaced: true,   // 开启命名空间，这样组件中使用mapState('模块名',['数据'])就可以访问到该模块了
    state,
    mutations,
    actions,
    getters
}
