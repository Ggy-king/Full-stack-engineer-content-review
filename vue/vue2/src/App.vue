<template>
  <!-- vue2中有且只能有一个div大盒子 -->
  <div class="App">
    <AppHeader v-loading="isLoading"></AppHeader>
    <UserComment ref="comment"></UserComment>

    <input @dblclick="handleDBClick" @blur="isShow" type="text" v-focus v-lazy>
    <!-- 双击显示 失去焦点隐藏 -->

    <!-- 当页面需要同一个组件多次，并且还需要每个组件单独有些地方不同 可以使用 -->
    <!-- @input="() => changeCount(item)" 一个比较高级的写法 既可以保留input实现函数调用的参数 又可以接受外部参数item -->
    <AppHeader @input="() => changeCount(item)">
      <!-- 没有名字默认插槽 传值的时候用#default="obj" -->
      <template #default="obj">
        这里的内容展示在slot中
      </template>
    </AppHeader>
    <AppHeader>
      <template v-slot:header #header="obj">
        {{ obj.msg }}
        <!-- obj是个对象 对象里面有组件里的slot提供的数据 -->
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

    <!-- 路由 -->
    <div class="router">
      <a href="#/home">主页</a>
      <a href="#/shop">商城</a>
      <a href="#/my">个人</a>

      <!-- router-link可以取代a标签使用to属性跳转路由 还默认提供高亮类名 -->
      <router-link to="/home">主页</router-link>
      <!-- ?后接查询参数 用$route.query.拿到查询参数的键值 适合多个参数 -->
      <router-link to="/shop?key=笔类别">商城</router-link>
      <router-link to="/shop?pen=钢笔">商城</router-link>
      <router-link to="/shop?pen=水彩笔">商城</router-link>

      <!-- my在路由里配置的是动态路由 适合单个参数 -->
      <router-link to="/my">个人</router-link>
      <router-link to="/my/key">个人</router-link>
      <router-link to="/my/pen">个人</router-link>
    </div>

    <!--  
          keep-alive是缓存组件 组件每一次切换都会被销毁。而keep-alive会将切出去的组件保留在内存中不销毁
          1 他会缓存所有当前级别路由所匹配的规则组件 >= 
          2 被缓存的组件会多两个生命周期(像被销毁的两个生命周期就用不到了)
            - activated 激活时，组件被看到时触发
            - deactivated 失活时 离开页面组件看不见时 
          include: 组件名数组 只有匹配的组件才会被缓存
          exclude: 组件名数组 任何匹配的都不会被缓存
          max: 最多能缓存多少个组件
    -->
    <keep-alive :include="['home', 'shop']">
      <!-- router-view是路由切换展示的占位符 -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

// ES6模版规范
export default {
  components: {
    // 组件名:组件对象 最好是统一命名
    AppHeader,
  },
  
  data() {
    return {
      isLoading: true,
      list: [
        { id: 1, uname: "张三" },
        { id: 2, uname: "李四" },
        { id: 3, uname: "王五" },
      ],
    };
  },
  activated() {
    // 激活时生命周期
  },
  deactivated() {
    // 失活时生命周期
  },
  provide() {
    // provide是向子孙后代共享所有数据的 直接return{}即可 用inject接
    return {
      list: this.list, // 推荐复杂数据类型 是响应式的
    };
  },
  methods: {
    fn() {
      console.log("你好")
      this.$refs.comment.checkMsg()
      this.$nextTick(() => {  // 等dom真正加载完成
        this.$refs.yesUse.focus()  // 立即获取焦点
      })


    },
  },

  // 局部定义自定义v-属性
  directives: {
    lazy: {  // 指令名
      // 执行时机 元素一更新到页面的时候触发
      inserted(el, binding) { // el就是当前绑定的元素 binding就是指令想关的配置
        console.log(el, binding.value)  // binding.value就是指令后面的值 v-loading="time50"  指令修改会触发update函数
      },
      update(el, binding) {
        console.log(el, binding.def);
      }
    }
  }
};
</script>


<!-- 让vue支持less
  1 给style标签加上 lang='less'
  2 安装依赖包 less 和 less-loader
  3 npm 中 -D 安装开发的依赖 只在开发的时候用 
-->
<style lang="less" scoped>
//a.router-link-active 第一router-link到页面中就是a标签你选a就是选router 
// 第二router-link-active和router-link-exact-active是vue帮你配置的类型，你当前选中的路由就会高亮
.router a.router-link-active {
  //router-link-active 是模糊匹配就是只要是/home开头就行  用的多
  background-color: purple;
}

.router a.router-link-exact-active {
  // router-link-exact-active 是精确匹配就是只有/home/page才行 多一个少一个都不行
  background-color: purple;
}
</style>