import Vue from 'vue'

const Bus = new Vue()  // Bus就是Vue的实例化 通过$emit方式向实例传值 用$on拿到实例上的值

export default Bus