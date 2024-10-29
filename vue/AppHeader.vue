<template>
  <div @click="changeFn">
    {{ title }}

    <!-- input表单一类的如果子组件想双向数据绑定props里的值是不能用v-model的因为子不能改父 要用:value/:checked -->
    <!-- <select :value="title" @change="handleChange"> -->

    <!-- 这种写法常用 :value='value' -->
    <select :value="value" @change="handleChange">
      <option value="12"></option>
      <option value="13"></option>
      <option value="14"></option>
      <option value="15"></option>
    </select>

    <!-- 使用插槽站位 在调用组件里写内容会展示在slot里 -->
    <!-- slot是插槽 作为一个站位符 用于展示父组件所传递的内容 -->
    <!-- 没名字叫默认插槽 -->
    <slot>这里是默认值</slot>
    <!-- 有名字叫具名插槽 用于区分就可以展示多个slot -->
    <slot name="header" msg="传过去" :far="now"></slot>
  <!-- {msg:"传过去",now:'值'} slot将上面这个对象传递给父组件 -->
    <slot name="main"></slot>
    <slot name="footer"></slot>

    <div v-show="visible"></div>
  </div>
</template>

<script>
export default {
  // 接受到父亲组件的属性
  props: {
    title,
    value: String,
    visible: Boolean
  },
  inject: ['list', 'fatherTitle'],  // inject接受最上层共享的数据
  methods: {
    changeFn() {
      this.$emit('changeFather', '改变父组件')  // 这里是父子传值
      this.$emit('sendMsg', '传值给bus')  // 这里是bus总线传值  任何监听了sendMsg的组件都能收到这个值

    },
    handleChange(e) {
      this.$emit('changeSelect', e.target.value)   // 把监听到的e.target.value值传递给父组件中changeSelect事件

      // 父组件中的写法
      // :title = "fatherTitle"
      // @changeSelect="fatherTitle = $event"


      // 11111 上面的内容可以简写 核心就是用input事件传而不是自定义事件 子组件接受用:value="value"接
      this.$emit('input', e.target.value)     //直接变成input事件就行了 父组件那边就可以用成v-model='数据'

      this.$emit('update:visible', false)   // update: 是固定的 后面visible是看你传的什么属性了


    }
  }
}
</script>

<style></style>