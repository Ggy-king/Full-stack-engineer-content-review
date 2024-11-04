// 首个入口文件 建立实例化vue入口

import Vue from 'vue'  // 核心包
import App from './App.vue'   // 根组件

import router from './router/index.js'  // 引入路由对象

import UserComment from './components/UserComment.vue'  // 其他组件

Vue.config.productionTip = false  // 提示什么环境(在浏览器控制台中提醒) 生产/开发


// 进行全局注册
Vue.component('UserComment', UserComment)   // 注册完了 任何组件中都能用

// 进行全局自定义指令注册
Vue.directive('focus', {
  inserted(el) {  // inserted当绑定的元素被插入到页面的时触发
    el.focus()  // 自动获取焦点
  }
})

Vue.directive('loading', {  // 准备一个loading类 控制显示隐藏
  inserted(el, binding) {  // 初始状态
    binding.value ? el.classList.add('.loading') : el.classList.remove('.loading')
  },
  update(el, binding) {  // 更新时
    binding.value ? el.classList.add('.loading') : el.classList.remove('.loading')

  }
})


new Vue({
  // el:'#app',  // 第一这里直接指向public/index.html  第二el:'#app'与.$mount('#app')功能完全一样
  // render: (createElement) => {
  //   return createElement(App)
  // }


  render: h => h(App),  // 这里是基于App.vue创建index.html中的结构  如果不写这句话就是相当与直接往index.html里写，写上这句话才会将App.vue文件渲染到index.html里
  router   // 在这里把路由实例化对象配置到vue实例中
}).$mount('#app')
