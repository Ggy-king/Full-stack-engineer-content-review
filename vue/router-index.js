// 在router文件夹下创建文件index.js 把路由相关的配置都引入
import Vue from 'vue'
import VueRouter from 'vue-router'   // 引入路由组件

// 引入views里面的组件 也就是主页面
import HomePage from './views/HomePage.vue'
import MyInformation from './views/MyInformation.vue'
import ShopCart from './views/ShopCart.vue'

Vue.use(VueRouter)  // 安装注册路由 每一个vue插件都需要用use注册

// 路由重定向 就是匹配到每一路径后强制跳转到另一个路径。比如没有登录就想进主页是不显示的，强制给你跳转到登录页面

const router = new VueRouter({  // 创建路由实例对象
    routes: [
        {path: '/', redirect: '/home'},   // 一访问到路径/就强制跳转到/home
        { path: '/home', component: HomePage },

        // 给路径加上的: 是可以让一个页面匹配多个子级路由 my/1  my/abc都能匹配:word就是动态参数也是必传的参数 :word?就变成了可选参数了 他就可以匹配到/my
        { path: '/my/:word?', component: MyInformation }, 

        { name:'路由名字',path: '/shop', component: ShopCart }, // 可以给路由起名字 适合路由比较长还需要别的地方跳转访问的时候
        
        {path: '*', component:NotFound}  // 放在最后 上面所有路径都匹配不到的话就匹配* 跳转到NotFound页面

    ],
    mode: "history", // 采用历史路径模式(路径里没有#)，上线需要后端支持 默认是hash(有#号)
    linkActiveClass: '类名1',    // 在这里自定义模糊匹配的router-link类名
    linkExactActiveClass: '类名2', // 自定义精准匹配router-link类名
})

 
export default router   // 在这里使用默认导出