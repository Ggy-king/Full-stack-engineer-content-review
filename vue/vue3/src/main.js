

// Vue3中把new Vue() new VueRouter() new Vuex.store()都封装成了函数createApp()createRouter()createStore()
import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app') // mount挂载与vue2比少了个$
