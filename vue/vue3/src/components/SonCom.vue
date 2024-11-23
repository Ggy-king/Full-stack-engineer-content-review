<script setup>

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
</script>

<template>
    <header>子组件</header>
    <div>
        <!-- 直接使用props中接受到的 -->
        {{ car }}
        <button @click="sendMsg"></button>
    </div>
</template>


<style lang="scss" scoped></style>