<template>
  <!-- vue2中只能有一个div -->
  <!-- 根div的类名或id最好与本vue文件同名 -->
  <div class="vue2开发">
    <!-- 本页面内头部组件 -->

    <!-- 1 父子组件传值 title是子组件的属性，:用来动态绑定fatherTitle父组件的属性 -->
    <!--   而在子组件中用props:[]来接受 -->
    <!-- 2 子传父是用$emit方法 注意this.$emit('名称','值')中的名称在父组件中其实就是一个事件 你需要用函数或者数据接受 -->
    <AppHeader :title="fatherTitle" @changeFather="handleChange"></AppHeader>

    <!-- 原版input监听 -->
    <AppHeader :title="fatherTitle" @changeSelect="fatherTitle = $event"></AppHeader>
    <!-- 简版input监听 -->
    <AppHeader v-model="fatherTitle"></AppHeader>
    <!-- .sync功能等同于v-model 有些场景不适合用value 所以用.sync 他在子组件中$emit要写update:visible -->
    <AppHeader :visible.sync="isShow"></AppHeader>
  </div>
</template>

<script>
// ES6模版规范
// 1 组件注册 局部注册 全局注册
// 局部注册 在components文件下编写vue文件 再在需要的文件内引入
// 全局注册 在components文件下编写vue文件 直接在main.js中注册组件
import AppHeader from "./components/AppHeader.vue";

import Bus from "./utils/EventBus.js";

export default {
  // 用export default导出
  name: 'VueApp',   // 这是组件对外的名字 你自己写的文件名可以随意(只要你配置了name)
  components: {
    // 都要写在components里
    // 组件名:组件对象 最好是统一命名
    AppHeader,
  },
  // props接受父亲的参数 用{} 可以用属性名:类型 这样的方式来确保用户/程序员父传子的类型是对的 还可以{}中再{}更详细约束
  props: {
    uname: String,
    password: Number,
    isShow: true,
    topTitle: {
      type: String, // 类型
      required: true, // 是否必填
      default: "这是默认值", // 默认值
      validator(value) {
        // 自定义校验逻辑
        if (value < 200) {
          return true;
        } else {
          console.error("传入的topTitle必须是小于200的值");
          return false;
        }
      },
    },
  },

  // 组件中的data都是函数 是为了保证每一个组件中的data是独立的一份 每次组件实例一创建都会执行一次data函数得到一个新对象
  data() {
    return {
      fatherTitle: "父组件的data",
      list: JSON.parse(localStorage.getItem("list")) || [
        // 这里做一下本地持久化 搭配watch使用(你会的)
        { id: 1, thing: "吃饭" },
        { id: 2, thing: "唱歌" },
        { id: 3, thing: "打篮球" },
      ],
    };
  },
  methods: {
    handleChange(newSon) {
      console.log(newSon);
      // 接受的函数参数就是@changeFather事件里带的参数值
    },
  },
  watch: {
    list: {
      // 对list属性深度监视 有变化就执行handle函数添加新值 本地储存
      deep: true,
      handle(newValue) {
        localStorage.setItem("list", newValue);
      },
    },
  },
  provide() {
    // provide是vue提供的可以向子孙后代所有人共享数据的方法 直接return{}就可以 子孙接受用inject
    return {
      fatherTitle: this.fatherTitle,  // 简单类型是非响应式的
      list: this.list  // 复杂类型是响应式的 推荐都共享复杂数据类型
    }

  },

  created() {
    // 事件总线bus 核心原理就是让所有组件都共有一个爹 1 A去监听Bus事件中B事件 2 B在Bus事件中发送事件 3 A在回接事件
    // 一定要先创建A 要先监听
    Bus.$on("sendMsg", (msg) => {
      // 在created中设置Bus.$on监听bus事件 第一个参数是事件名称，第二个是监听到需要执行的函数
      console.log(msg);
    });
  },
};
</script>

<!-- scoped是将下面的style样式仅作用于当前页面样式 -->
<!-- 当你给组件添加scoped后 他会对组件中每一个元素添加上一个data自定义属性 类似data-v-0ec3ed85这样 每个组件不一样 -->
<!-- 你觉得是写了div{}  实际上是div[data-v-0ec3ed85]{} -->

<style lang="less" scoped></style>