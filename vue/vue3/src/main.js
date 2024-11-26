

// Vue3中把new Vue() new VueRouter() new Vuex.store()都封装成了函数createApp()createRouter()createStore()
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate' 

import App from './App.vue'

import './assets/main.css'

const pinia = createPinia()  // 创建
pinia.use(persist)   // 挂载到pinia上
createApp(App).use(pinia).mount('#app') // mount挂载与vue2比少了个$
