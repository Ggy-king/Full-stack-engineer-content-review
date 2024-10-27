<template>
  <div @click="changeFn">
    {{title}}
  </div>
</template>

<script>
export default {
    // 接受到父亲组件的属性
    props: ['title'],
    inject: ['list','fatherTitle'],  // inject接受最上层共享的数据
    methods: {
        changeFn(){
            this.$emit('changeFather','改变父组件')  // 这里是父子传值
            this.$emit('sendMsg','传值给bus')  // 这里是bus总线传值  任何监听了sendMsg的组件都能收到这个值
            
        }
    }
}
</script>

<style>

</style>