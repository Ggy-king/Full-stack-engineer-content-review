// vuex仓库
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


// 创建仓库 注意是Vuex里面的仓库 Vuex本身能做的储存功能更多

const store = new Vuex.Store({
    // state类似data 是用来存储数据的
    state: {
        numCount: 100,
        objList:[
            {uname: 'zaa',age: 15},
            {uname: 'ffa',age: 25},
            {uname: 'dms',age: 48},
        ]
    }
})

export default store
