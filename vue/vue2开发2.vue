<template>
  <div class="app">
    <div ref="yesUse" class="noUse"></div>
    <AppHeader ref="appHeader"></AppHeader>

    <!-- 要记住一个点 vue是异步dom更新的 有时候你看页面dom结构变了但有可能dom还没有更新只是提前被渲染 所以有时候拿不到dom -->
    <!-- 要等页面dom真正加载出来再去执行某些操作需要用$nextTick() -->
  </div>
</template>

<script>
export default {
    // ref与$refs是用于获取dom元素的功能类似于document.querySelector 但是后者是整个页面的查找但是ref$refs是只在当前组件内查找
    // ref$refs还可以用来获取组件实例 拿到组件实例后还可以直接调用组件里面的方法
    methods: {
        handle() {
            this.$refs.yesUse  // 获取dom元素

            this.$refs.appHeader  // 获取组件实例
            this.$refs.appHeader.changeFn()  // 用他里面的方法

            this.$nextTick(() => {  // 等dom真正加载完成   可以用setTimeout但是时间无法精确计算
              this.$refs.yesUse.focus()  // 立即获取焦点
            })
        }
    }
}
</script>

<style>

</style>