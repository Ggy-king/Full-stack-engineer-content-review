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
import SonCom from './components/SonCom.vue'  // 组件导入直接就能用 无需用components注册
import { computed, reactive, ref, watch, onMounted, onUnmounted } from 'vue';
import { useUserStore } from '@/store'
import { storeToRefs } from 'pinia'
import { useRouter, useRoute } from 'vue-router'


// 1 reactive是实现响应式数据的函数 它只能包对象类型的数据
const state = reactive({
  count: 0
})
// 2 ref也是实现响应式，既能包对象也能包简单数据，以后推荐用ref
//       它的原理实际上是给数据包了一层reactive 所以在js中拿到值需要用count.value 在template中vue又扒了一层直接写count就行
const count = ref(0)
const list = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])
const obj = ref({
  name: '李四',
  age: 25
})

const handleCLickMsg = () => {
  console.log(count.value, state.count);
}

// 3 computed
const computedList = computed(() => {
  return list.value.filter(item => item > 2)
})
const computedListWhole = computed({
  get: () => { },
  set: (val) => { list.value = list.value + val }
})
console.log(computedListWhole);

// 4 watch
// watch(ref对象,(newValue,oldValue) => {},{其他配置})
// watch([ref对象,ref对象],(newValue,oldValue) => {},{其他配置})返回的也是数组
watch([count, list], (newValue, oldValue) => {
  console.log(newValue, oldValue);
}, {
  immediate: true,  // 一进入页面立刻执行
  deep: true,  // 监视复杂类型 深度监视
})

watch(
  () => obj.value.age,   // 如果想对复杂类型中某一个属性监听，可以改成函数式写法  也不需要写deep
  (newValue, oldValue) => { console.log(newValue, oldValue) }
)


// 5 生命周期 vue3的生命周期是兼容vue2的写法 只有beforeDestroy与destroyed被换成了beforeUnmount与unmounted 8个
// 在vue3的组合式生命周期是 setup onBeforeMount onMounted onBeforeUpdate onUpdated onBeforeUnmount unmounted 7个

// 1 <script setup> </script> 中的代码就是执行在setup生命周期中 注意setup周期取代了原beforeCreate与created

onMounted(() => {console.log('挂载时的逻辑')})

onUnmounted(() => {console.log('做定时器销毁的逻辑')})


// 6 父传子
/**
* 1 在子组件身上添加属性的方式接收
* 2 在子组件中通过props接收 需要用defineProps()编译器宏来接受 你就理解成函数吧
*/

// 7 子传父
/**
* 1 在父组件中给子组件身上添加自定义事件 用子组件身上绑定的事件来触发父组件内部的方法
* 2 在子组件内部通过emit方法来触发事件
*/
const getMessage = (meg) => {
// 子组件传值 调用该方法
console.log(meg)
}



// 8 通过ref拿到dom对象 或组件。 通过ref对象.value拿到元素
const headerRef = ref(null)
// 在需要的元素身上用ref="headerRef" 需要等待html渲染完才能拿到
onMounted(() => {
console.log(headerRef.value)
})


// 9 provide - inject 跨层级组件通信
/**
* 顶层组件 provide('相同的名字',传递的数据)
* 底层组件 inject('相同的名字') 接受了 很简单比vue2简单
*/
provide('count',count)
provide('changeCount',(newValue) => count.value = newValue ) // 还可以直接传递函数


// 10 defineOptions
/**
* 这个函数很好用，script变成setup组合式编程后很多与setup()平级的属性方法没办法写 像props emit expose slots
* 所以出现defineProps编译宏 但是像name 等属性就没有出 所以用defineOptions({})解决这些问题
* 你可以把defineOptions理解成export default{} 写法
*/
defineOptions({
name: 'App',
components:{},
inheritAttrs: false,
// 更多自定义属性...
})


// 11 pinia
const user = useUserStore() // userStore是一个函数 通过调用创建实例 注意创建后不能解构否则会丢掉响应式
const {username} = storeToRefs(user) //如果就想解构需要使用storeToRefs函数 从pinia中引入 但是方法可以直接解构
console.log(user.username,user.changeUserS);

// 12 路由 useRouter useRoute 在vue-router中引入
const router = useRouter() // 就是vue2中的路由对象
const route = useRoute() // 路由小实例
router.push('/list')



</script>

<template>
  <header ref="headerRef">
    <SonCom car="传值宝马汽车" :count="count" @get-message="getMessage" v-model="count"></SonCom>
    <div>{{ computedList }}</div>
    <button @click="handleCLickMsg">点击</button>
  </header>
</template>

<style scoped></style>
<!-- ./store/modules/user.js -->