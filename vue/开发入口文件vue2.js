// 首个入口文件 建立实例化vue入口

import Vue from 'vue'  // 核心包
import App from './App.vue'   // 根组件
import router from './router/index.js'  // 引入路由对象

import Comment from './components/Comment.vue'  // 全局引入
// css重置样式或其他公共样式都需要在这里导入


Vue.config.productionTip = false  // 提示什么环境(在浏览器控制台中提醒) 生产/开发


// 全局注册组件
Vue.component('Comment', Comment)   // 注册完了 任何组件中都可以直接用

// 全局注册自定义指令
Vue.directive('focus', {   // v-的名字与需要配置的方法
    inserted(el) {   // inserted是在 指令所在的元素被插入页面中的触发
        el.focus()  // 自动获取焦点
    }
})

Vue.directive('loading', {  // 准备一个loading类 控制显示隐藏
    inserted(el, binding) {  // 初始状态
        binding.value ? el.classList.add('.loading') : el.classList.remove('.loading')
    },
    update(el, binding) { // 更新时
        binding.value ? el.classList.add('.loading') : el.classList.remove('.loading')

    }
})


new Vue({
    // el:'#app',  // 第一这里直接指向public/index.html  第二el:'#app'与.$mount('#app')功能完全一样
    // render: (createElement) => {
    //   return createElement(App)
    // }


    render: h => h(App),  // 这里是基于App.vue创建index.html中的结构  如果不写这句话就是相当与直接往index.html里写，写上这句话才会将App.vue文件渲染到index.html里
    router   // 把实例化路由对象加载到vue实例上
}).$mount('#app')
