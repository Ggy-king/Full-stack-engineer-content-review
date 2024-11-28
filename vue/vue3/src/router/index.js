import { createRouter, createWebHistory } from 'vue-router'
import {useTokenStore} from '@/store'

const router = createRouter({
  //   history就是vue2的mode 两种路由模式 history是createWebHistory() hash是createWebHashHistory()
  // import.meta.env 是vite环境变量 BASE_URL是根地址可以去vite中配置
  history: createWebHistory(import.meta.env.BASE_URL),    // 传的参数是地址 默认是'/'表示前缀

  routes: [
    { path: 'son', component: () => import('@/components/SonCom.vue') },  // 后续直接写成异步写法就行了
    
    {
      path: '/',
      component: () => import('@/views/home'),
      redirect: '/article',          // 重定向
      children: [
        { path: '/article', component: () => import('@/views/article') },
      ]
    },
  ],
})


// 新版语法 默认放行 以前的想放行也得掉next
// 1 undefined true放行
// 2 false 不放行 回到原来的
// 3 具体地址或路径对象 拦截到对应地址

router.beforeEach(() => {
  // 如果没有token 且访问的是非登录页，拦截到登录页 
  const useStore = useTokenStore()
  if(!useStore.token && to.path !== '/login') return './login'
}) 

export default router
