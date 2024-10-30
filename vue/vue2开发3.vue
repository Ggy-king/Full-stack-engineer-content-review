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
        <!-- router-view是路由切换展示的占位符 -->
        <router-view></router-view>

    </div>
</template>

<script>
export default {
    name: 'VueApp3',
    created() {
      this.$route.query.key   // 对路由操作要在created中
      this.$route.params.word  // 动态路由的参数是params
    }
}
</script>

<style lang="less" scoped>
//a.router-link-active 第一router-link到页面中就是a标签你选a就是选router 
// 第二router-link-active和router-link-exact-active是vue帮你配置的类型，你当前选中的路由就会高亮
.router a.router-link-active {   //router-link-active 是模糊匹配就是只要是/home开头就行  用的多
  background-color: purple;
}

.router a.router-link-exact-active {  // router-link-exact-active 是精确匹配就是只有/home/page才行 多一个少一个都不行
  background-color: purple;
}
</style>