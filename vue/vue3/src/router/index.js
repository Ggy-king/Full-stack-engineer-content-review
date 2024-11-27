import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
//   history就是vue2的mode 两种路由模式 history是createWebHistory() hash是createWebHashHistory()
    // import.meta.env 是vite环境变量 BASE_URL是根地址可以去vite中配置
  history: createWebHistory(import.meta.env.BASE_URL),    // 传的参数是地址 默认是'/'表示前缀

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
