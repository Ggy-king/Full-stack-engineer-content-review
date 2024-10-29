<template>
  <div class="app">
    <div ref="yesUse" class="noUse"></div>
    <AppHeader ref="appHeader" v-loading="isLoading"></AppHeader>

    <!-- 当页面需要同一个组件多次，并且还需要每个组件单独有些地方不同 可以在组件内部使用插槽 -->
    <AppHeader @dblclick="handleDBClick" @burl="isShow">
      <!-- 没有名字默认插槽 传值的时候用#default="obj" -->
      <template #default="obj">
        这里的内容展示在slot中
      </template>
    </AppHeader>
    <AppHeader>
      <template v-slot:header #header="obj">
        <!-- obj是个对象 对象里面有组件里的slot提供的数据 -->
        {{ obj.msg }}
        头部插槽
      </template>
      <template v-slot:main>
        主体插槽
      </template>
      <!-- v-slot:name可以简写 #name -->
      <template #footer>
        底部插槽
      </template>
    </AppHeader>

    <input type="text" ref="" v-focus>

    <!-- 要记住一个点 vue是异步dom更新的 有时候你看页面dom结构变了但有可能dom还没有更新只是提前被渲染 所以有时候拿不到dom -->
    <!-- 要等页面dom真正加载出来再去执行某些操作需要用$nextTick() -->
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'

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
  },
  // 自定义指令 v-focus封装一个页面自动获取焦点 v-loading封装一个正在加载 v-lazy封装一个懒加载
  // 局部定义与全局定义
  // 局部定义自定义v-属性
  directives: {
    lazy: {  // 指令名
      // 执行时机 元素一更新到页面的时候触发
      inserted(el, binding) { // el就是当前绑定的元素 binding就是指令想关的配置
        console.log(el, binding.value)  // binding.value就是指令后面的值 v-loading="time50"  指令修改会触发update函数 
      },
      // 执行时机 指令的值被修改了的时候触发 也就是响应式
      update(el, binding) {
        console.log(el, binding.def);
      }
    }
  },
  components: {
    AppHeader,
  }
}
</script>

<style>
</style>