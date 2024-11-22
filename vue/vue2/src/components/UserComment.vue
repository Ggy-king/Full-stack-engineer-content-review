<template>
  <div class="comment" :class="{ 'no-text-select': true }">
    <div @click.stop="count--">减</div>
    <div @click="checkMsg">{{ count }}</div>

    <!-- 模版中访问一切$都不需要加this -->
    <div @click="handleStoreAdd">{{ $store.state.numCount }}</div>
    <div @click="addCount(2);changeCountAction(20)">{{ numCount }}</div>
    <div @click="addCount(2)">{{ $store.getters.filterList }}</div>

    <!-- 访问子模块的vuex数据  $store.state.user   $store.getters['模块名/xxx']-->
    <div @click="setUser(obj)">{{ $store.state.user.userInfo.username }}{{ $store.getters['user/UpperCaseName'] }}</div>

    <div @click="count++">加</div>
  </div>
</template>

<script>
import Bus from '@/utils/EventBus'
import { mapState,mapMutations,mapActions,mapGetters } from 'vuex';   // mapState,mapMutations是在vuex中的方法 

export default {
  data() {
    return {
      count: 521,
    };
  },
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
  methods: {
    checkMsg() {
      this.$emit('sendMsg', count)  // 父子是用this.$emit发送 
      Bus.$emit('sendMsg', count)  // 总线都是用Bus.$emit发送 
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
    ...mapActions('user',['setUserSecond'])  // 异步方法子模块扩展 四个都一样
  }
};
</script>

<style lang="less" scoped>
.no-text-select {
  // user-select: none; 禁止文本被选中
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.comment div {
  float: left;
  width: 40px;
  height: 40px;
  margin-top: 40px;
  text-align: center;
  line-height: 40px;
}

div:nth-child(1),
div:nth-child(3) {
  background-color: #ccc;
  border: 1px solid black;
}
</style>