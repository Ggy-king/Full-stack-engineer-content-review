<script setup>
import { inject } from 'vue';


// 1 props
// 其实你就是可以把defineProps理解成函数 毕竟vue3用vue2的基本都变成了函数才能在setup中使用
const props = defineProps({   
    car: String
})

// 在setup中使用需要是props.car 在模版中直接使用就行了
console.log(props.car)

// 2 emit
// defineEmits编译器宏 参数为数组数组中是父组件的自定义事件 这样写更好的声明了子组件有多少事件需要用
const emit = defineEmits(['get-message'])  

const sendMsg = () => {
    emit('get-message','给父组件传递的信息')  // emit()的写法正好可以单独调用事件
}

// 3 defineExpose
// defineExpose是暴露宏 用于将组件内部的方法变量暴露出去 允许其他组件访问
const arr = [1,2,5,4]
const say = () => {console.log('你好')}

defineExpose({
    arr,
    say
})

// 4 defineSlots

// 5 defineOptions
/**
 * 这个函数很好用，script变成setup组合式编程后很多与setup()平级的属性方法没办法写 像props emit expose slots
 * 所以出现defineProps编译宏  但是像name 等属性就没有出 所以用defineOptions({})解决这些问题 
 * 你可以把defineOptions理解成export default{} 写法
 */
defineOptions({
    name: 'SonCom',
    components:{},
    inheritAttrs: false,
    // 更多自定义属性...
})

// 6 defineModel
/**
 * 这个方法是取代以前v-model 父传子 子改父 实时更新
 * 以前需要父组件中绑定v-model传给子并 子组件中先定义props接受 在绑定给元素 实时更新的话还需要使用emit让父更新
 * 现在defineModel封装了props update 并能直接改父
 */
const modelValue = defineModel()
// 看下面input组件怎么使用 用:value="modelValue"绑定input值
// 使用@input事件改掉modelValue 注意modelValue可以直接改老爹的数据!!!



// 7 inject
const count = inject('count')
const changeCount = inject('changeCount')
changeCount(200)
console.log(count)

const reader = new FileReader();   // FileReader是异步读取用户计算机上的文件的api 处理文件/图片

</script>

<template>
    <header>子组件</header>
    <div>
        <!-- 直接使用props中接受到的 -->
        {{ car }}
        <button @click="sendMsg"></button>
        <input type="text" :value="modelValue" @input="e => modelValue = e.target.value">
    </div>
</template>


<style lang="scss" scoped></style>