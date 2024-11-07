<!-- 版本 -->
<!-- 233  vue2 vue-router3 vuex3 -->
<!-- 344  vue3 vue-router4 vuex4 -->
<template>
  <div>
    1 views下的组件用于路由
    2 components下的组件多用于复用
    <!-- 路由 -->
    <div class="router">
      <a href="#/home">主页</a>
      <a href="#/shop">商城</a>
      <a href="#/my">个人</a>

      <!-- router-link可以取代a标签使用to属性跳转路由 还默认提供高亮类名 -->
      <router-link to="/home">主页</router-link>
      <!-- ?后接查询参数 用$route.query.拿到查询参数的键值 适合多个参数 -->
      <router-link to="/shop?key=笔类别">商城</router-link>
      <router-link to="/shop?pen=钢笔">商城</router-link>
      <router-link to="/shop?pen=水彩笔">商城</router-link>

      <!-- my在路由里配置的是动态路由 适合单个参数 -->
      <router-link to="/my">个人</router-link>
      <router-link to="/my/key">个人</router-link>
      <router-link to="/my/pen">个人</router-link>
    </div>
    <button @click="goSearch">搜索跳转</button>

    <!-- keep-alive是缓存组件 组件每一次切换都会被销毁。而keep-alive会将切出去的组件保留在内存中不销毁 -->
    <keep-alive include="">
      <!-- router-view是路由切换展示的占位符 -->
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'VueApp3',
  created() {
    this.$route.query.key   // 对路由操作要在created中
    this.$route.params.word  // 动态路由的参数是params

  },
  methods: {
    goSearch() {
      // 编程式导航 1 path跳转 2 name跳转
      // 1 path跳转传参   1 查询参数拼?或query  2 动态参数直接/参数


      // push是跳转的意思
      this.$router.push('/shop')  // 注意这里是router  routes是路由器匹配规则 router是路由对象 route是路由实例
      this.$router.push({
        path: '/shop'
      })
      this.$router.push({
        path: '路由名字'   // 当你给路由配置了name的时候 可以用name跳转 适合path比较长的场景
      })

      // 传参
      this.$router.push('/路径/参数')
      this.$router.push('/路径?键=值&键=值')
      this.$router.push({
        path: '/shop',
        query: {
          键1: 值1,
          键2: 值2,
        }
      })
      this.$router.push({
        path: '/shop/参数',

      })
      // 如果路由有name名字
      this.$router.push({
        name: '路由名字',
        query: {
          键1: 值1,
          键2: 值2,
        },
        params: {
          words: '参数'   // 这里的键是路由中的:words?
        }
      })

    }
  }
}
</script>

<style lang="less" scoped>
//a.router-link-active 第一router-link到页面中就是a标签你选a就是选router 
// 第二router-link-active和router-link-exact-active是vue帮你配置的类型，你当前选中的路由就会高亮
.router a.router-link-active {
  //router-link-active 是模糊匹配就是只要是/home开头就行  用的多
  background-color: purple;
}

.router a.router-link-exact-active {
  // router-link-exact-active 是精确匹配就是只有/home/page才行 多一个少一个都不行
  background-color: purple;
}
</style>