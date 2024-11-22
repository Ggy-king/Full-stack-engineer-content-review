<!-- 第一vue3中排版顺序是script -> template -> style -->

<!-- <script>
export default {
  // setup执行的时机比beforeCreate还要早
  // setup中没有this,他创建的比beforeCreate还早怎么会有this呢
  // 数据和函数需要使用需要用return导出
  // 每一次return很麻烦 出现语法糖setup 自动都帮你导出
  setup() { 
    // 数据        
    const meg = '点击打印'

    // 函数
    const handleCLickMsg = () => {
      console.log(meg);
    }

    return {
      handleCLickMsg
    }

  }
} 

</script> -->

<!-- 加上setup是允许在script中直接写组合式api -->
<!-- <script setup> -->
<script setup>
import HelloWorld from './components/HelloWorld.vue'  // 组件导入直接就能用 无需用components注册
import { reactive, ref } from 'vue';
// 1 reactive是实现响应式数据的函数 它只能包对象类型的数据
const state = reactive({
  count: 0
})
// 2 ref也是实现响应式，既能包对象也能包简单数据，以后推荐用ref
//       它的原理实际上是给数据包了一层reactive 所以在js中拿到值需要用count.value 在template中vue又扒了一层直接写count就行
const count = ref(0)

const handleCLickMsg = () => {
  console.log(count.value,state.count);
}

</script>

<template>
  <header>
    <button @click="handleCLickMsg">点击</button>
  </header>
</template>

<style scoped></style>
