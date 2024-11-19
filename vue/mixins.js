export default {
    // 在src下新建文件
    // 此处编写是vue组件实例的配置项 通过一定语法 可以直接混入组件内部
    // 如果此处和组件内提供了同名的data和methods 则组件内的优先级更高
    // 在需要使用的组件中 使用mixins: [] 方法注册使用

    data () {
        return {
            title: '哈哈哈'
        }
    },
    methods: {
       sayHi() {
        console.log('哈哈哈哈') 
       } 
    }
}