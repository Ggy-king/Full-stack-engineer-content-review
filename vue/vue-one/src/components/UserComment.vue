<template>
  <div class="comment" :class="{'no-text-select':true}">
    <div @click.stop="count--" >减</div>
    <div @click="checkMsg">{{ count }}</div>
    <div @click="count++">加</div>
  </div>
</template>

<script>
import Bus from '@/utils/EventBus'

export default {
  data() {
    return {
      count: 521,
    };
  },
  methods: {
    checkMsg() {
      this.$emit('sendMsg',count)  // 父子是用this.$emit发送 
      this.$emit('sendMsg',count)  // 总线都是用Bus.$emit发送 
    }
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