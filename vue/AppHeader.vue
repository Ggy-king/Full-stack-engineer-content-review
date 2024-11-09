<template>
  <div @click="changeFn">
    {{ title }}
    <!-- 拿到路由查询参数的键值 -->
    {{ $route.query.pen }}

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

    <!-- 模版中访问一切$都不需要加this -->
    <div @click="handleStoreAdd">{{ $store.state.numCount }}</div>
    <div @click="addCount(2);changeCountAction(20)">{{ numCount }}</div>
    <div @click="addCount(2)">{{ $store.getters.filterList }}</div>

    <!-- 访问子模块的vuex数据  $store.state.user   $store.getters['模块名/xxx']-->
    <div @click="setUser(obj)">{{ $store.state.user.userInfo.username }}{{ $store.getters['user/UpperCaseName'] }}</div>
  </div>
</template>

<script>
import Bus from './EventBus.js'
import {mapState} from 'vuex'   // mapState在vuex中

export default {
  computed: {
    // store中的数据名称太长可以用computed属性简化 常用mapState辅助函数简化操作将store数据自动映射在computed中
    numCount() {
      return this.$store.state.numCount
    },

    // 1 mapState mapGetters都是映射属性 所以要在computed中配置
          // --- 需要注意 可以把子模块的名称直接配置到map中 拿到的就是{}包裹的所有数据
    ...mapState(['numCount', 'user','setting']),   // 第一mapState要放在computed中 第二mapState参数是数组 第三要用...展开在computed中
    ...mapState('user',['userInfo']), // 这种方式可以单独找哪个模块，user模块中userInfo 记得开启命名空间namespaced
    ...mapGetters(['filterList','user','setting']),  // getters就是low版computed 没什么好说的
    ...mapGetters('user',['UpperCaseName'])  // 与state一模一样
  },
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
      Bus.$emit('sendMsg', '传值给bus')  // 这里是bus总线传值  任何监听了sendMsg的组件都能收到这个值

    },
    handleChange(e) {
      this.$emit('changeSelect', e.target.value)   // 把监听到的e.target.value值传递给父组件中changeSelect事件

      // 父组件中的写法
      // :title = "fatherTitle"
      // @changeSelect="fatherTitle = $event"


      // 11111 上面的内容可以简写 核心就是用input事件传而不是自定义事件 子组件接受用:value="value"接
      this.$emit('input', e.target.value)     //直接变成input事件就行了 父组件那边就可以用成v-model='数据'

      this.$emit('update:visible', false)   // update: 是固定的 后面visible是看你传的什么属性了


    },
    handleStoreAdd() {
      // 调用mutations中addCount的方法  第二个参数是参数只能有一个参数  默认子模块mutations和actions会挂载到全局，所以以后都开启命名空间
      this.$store.commit('addCount', {
        count: 5,
        title: '改'
      })
      // 调用mutations中addCount的方法  第二个参数是参数只能有一个参数
      this.$store.commit('addCount', 521)  
      this.$store.commit('user/setUser',obj)  // 子模块使用('模块/xxx',参数)
      
      
      
      // 调用actions中changeCount的方法 处理异步
      this.$store.dispatch('changeCountAction',520)
      this.$store.dispatch('user/setUserSecond',obj)
    },

    // 2 mapMutations mapActions都是映射方法 要在methods中写
    ...mapMutations(['addCount']),  // 一模一样数组 扩展 直接将store中mutations中方法添加到methods中 页面中直接可以调用
    ...mapMutations('user',['setUser']),  // 方法子模块扩展 四个都一样
    ...mapActions(['changeCount']), // 一模一样数组 扩展 直接将store中actions中方法添加到methods中 页面中直接可以调用
    ...mapActions('user',['setUserSecond'])   // 异步方法子模块扩展 四个都一样
  }
}
</script>

<style></style>