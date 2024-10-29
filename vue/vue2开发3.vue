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
        </div>
        <!-- router-view是路由切换展示的占位符 -->
        <router-view name="path"></router-view>

    </div>
</template>

<script>
export default {
    name: 'VueApp3'
}
</script>

<style lang="scss" scoped></style>