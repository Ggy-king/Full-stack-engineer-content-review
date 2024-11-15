// vuex仓库
// 根目录 存放根数据


import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'  // 引入模块user
import setting from './module/setting' // 引入模块user

Vue.use(Vuex)

// Vuex是单项数据流 组件不能直接改vuex中的数据
// 创建仓库 注意是Vuex里面的仓库 Vuex本身能做的储存功能更多

export default new Vuex.Store({   // 直接这样返回出去就行了
    // 1
    // state类似data 是用来存储数据的
    state() {
        return {
            numCount: 100,
            objList: [
                { uname: 'zaa', age: 15 },
                { uname: 'ffa', age: 25 },
                { uname: 'dms', age: 48 },
            ],
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    },
    // 2
    // 真几把麻烦 mutations
    // 组件中调用 this.$store.commit('addCount')
    mutations: {   // mutations是vuex提供的修改数据的方法
        addCount(state, obj) {   // 为要修改的数据创建函数 第一个参数是state 第二个是传参（只能有一个 多个参数用数组或对象）
            state.numCount += onj.count
        },
        changeCount(state, n) {
            state.numCount = n + 10
        }
    },
    // 3
    // 处理异步 mutations只能处理同步 actions里面配置函数处理异步
    actions: {
        // 第一个参数context是上下文(此处没有分模块可以当成store仓库) 就是context就是store
        changeCountAction(context, num) {
            // setTimeout模拟异步
            setTimeout(() => {
                context.commit('changeCount', num)   // 跟搞了一层代理一样 其实就是为了能处理异步函数
            }, 1000);
        }
    },
    // 4
    // getters 类似computed 之所以类似是因为getters只有get方法没有set方法
    getters: {
        filterList(state) {
            return state.list.filter(item => item > 5)
        },
        token(state) {
            return state.user.userInfo.username   // 在getters中返回全局变量token 这样的话是计算属性实时更新
        }
    },
    // 5
    // modules模块 拿到其他模块中的state mutations actions getters
    modules: {
        user,
        setting
    }
})


