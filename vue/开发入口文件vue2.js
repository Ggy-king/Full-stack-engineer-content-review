// 首个入口文件 建立实例化vue入口

import Vue from 'vue'  // 核心包
import App from './App.vue'   // 根组件

import Comment from './components/Comment.vue'  // 全局引入
// css重置样式或其他公共样式都需要在这里导入

Vue.config.productionTip = false  // 提示什么环境(在浏览器控制台中提醒) 生产/开发


// 进行全局注册
Vue.component('Comment',Comment)   // 注册完了 任何组件中都可以直接用


new Vue({
    // el:'#app',  // 第一这里直接指向public/index.html  第二el:'#app'与.$mount('#app')功能完全一样
    // render: (createElement) => {
    //   return createElement(App)
    // }


    render: h => h(App),  // 这里是基于App.vue创建index.html中的结构  如果不写这句话就是相当与直接往index.html里写，写上这句话才会将App.vue文件渲染到index.html里
}).$mount('#app')
