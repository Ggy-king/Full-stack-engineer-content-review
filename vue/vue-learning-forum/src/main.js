import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'

import '@/style/reset.css'
import '@/style/base.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
