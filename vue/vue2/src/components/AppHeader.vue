<template>
  <div class="app-header">你好，我是本页面的头部</div>

  <!-- 下面是兄弟组件，我们做一下事件总线Bus用$on和$emit方法 -->
  <UserComment></UserComment>

  <!-- slot是插槽 作为一个站位符 用于展示父组件所传递的内容 -->
  <!-- 没名字叫默认插槽 -->
  <slot>这里是默认值</slot>
  <!-- 有名字叫具名插槽 用于区分就可以展示多个slot -->
  <slot name="header" msg="传过去" :far="now"></slot>
  <!-- {msg:"传过去",now:'值'} slot将上面这个对象传递给父组件 -->
  <slot name="main"></slot>
  <slot name="footer"></slot>
</template>

<script>
import UserCommentVue from "./UserComment.vue";

// 引入事件总线Bus 其实就是新建了一个Vue实例化
import Bus from "../utils/EventBus.js";
import loginConfirm from '@/mixins/loginConfirm'

export default {
  mixins: [loginConfirm],  // 熟悉吧 vue2中也有 可以封装一个类似组件共用的data method等 混入进新的组件省的一些重复性的东西重复写
  components: {
    UserComment: UserCommentVue,
  },
  // 接受到父亲组件的属性
  props: {
    title: {
      value: String,
      visible: Boolean
    },
    item: {
      type: Object,
      default: () => {    // 一定要注意，如果接收的累死你个是对象，默认值需要用函数返回!!!
        return {}
      }
    }
  },
  inject: ["list"], // 接收顶级组件的provide数据

  // 在created中监听Bus
  created() {
    Bus.$on("sendMsg", (msg) => {
      console.log(msg);
    });
  },
};
</script>

<style lang="less" scoped>
.app-header {
  height: 100px;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
  background-color: orange;
}
</style>