// 模块化配置 日后vuex中的数据变多难以维护用 module分割

// setting模块
export default {
    namespaced: true,

    state() {
        return {
            theme: 'light', // 主题色
            desc: '测试dome'
        }
    },
    mutations: {},
    actions: {},
    getters: {},

}