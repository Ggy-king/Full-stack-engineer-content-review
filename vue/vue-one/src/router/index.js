// 在router文件夹下创建文件index.js 把路由相关的配置都引入
import Vue from 'vue'
import VueRouter from 'vue-router'   // 引入路由组件


import store from '@/store'


// 引入views里面的组件 也就是主页面
import HomePage from '../views/HomePage.vue'
import MyInformation from '@/views/MyInformation.vue'  // vue默认配置了@绝对路径 @代表src(可以改)这样可以避免移动文件路径还要重新调

// 把shop和notFount两个组件变成按需加载，上面两个用户可能常访问到就默认加载
// import ShopCart from '@/views/ShopCart.vue'
// import NotFound from '@/views/NotFound.vue'
const NotFound = () => import('@/view/NotFound.vue')
const ShopCart = () => import('@/views/ShopCart.vue')




Vue.use(VueRouter)  // 安装注册路由 每一个vue插件都需要用use注册


const router = new VueRouter({  // 创建路由实例对象
    routes: [
        { path: '/', redirect: '/home' },   // 一访问到路径/就强制跳转到/home

        // 配置子路由用children 在children中写跳转组件并在home组件中书写router-view 实现二级跳转
        { path: '/home', component: HomePage, children: [{ path: '/one', component: One }, { path: '/two', component: Two }] },

        // 给路径加上的: 是可以让一个页面匹配多个子级路由 my/1  my/abc都能匹配:word就是动态参数也是必传的参数 :word?就变成了可选参数了 他就可以匹配到/my
        { path: '/my/:word?', component: MyInformation },

        { name: '路由名字', path: '/shop', component: ShopCart }, // 可以给路由起名字 适合路由比较长还需要别的地方跳转访问的时候

        { path: '*', component: NotFound }  // 放在最后 上面所有路径都匹配不到的话就匹配* 跳转到NotFound页面
    ],
    mode: 'history',  // 采用历史路径模式(路径里没有#),上线需要后端支持 默认是hash(有#号)
    linkActiveClass: '类名1',    // 在这里自定义模糊匹配的router-link类名
    linkExactActiveClass: '类名2', // 自定义精准匹配router-link类名
})

// 需要权限才能看的页面
const authUrls = ['/my', '/shop']

// 路由前置导航守卫 也就是在路由跳转前判断哪些页面可以跳转
// to 到哪去 from 从哪来 next()直接放行 next(路径)进行拦截
router.beforeEach((to, from, next) => {
    // 看to.path 是否在authUrls中出现
    if (!authUrls.includes(to.path)) {
        next() //这样写默认放行，不写不放行
        return
    }
    const token = store.getters.token
    token ? next() : next('/login')  // 如果token不在则拦截到login

})

export default router