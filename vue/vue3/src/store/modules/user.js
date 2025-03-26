import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";

// pinia基本类似vuex pinia只有三个state actions getters

// 定义store
// defineStore(仓库的唯一标识,{})  选项式写法 不推荐
// defineStore(仓库的唯一标识,() => {})  组合式写法  需要导出，导出后拿到的是一个函数
export const useUserStore =  defineStore('users',() => {
    // 声明数据state 用ref
    const username = ref('张三')

    // 声明方法actions 用普通函数
    const changeUserS = () => username = '李四' 
    const getUserInfo = async () => {
        const {data: data} = await axios.get('https://')  // 异步当同步 没有async await下面的data就是undefined
        username = data.username   // 同步 
    }

    // 声明基于数据派生的计算属性getters 用computed函数
    const addUser = computed(() => username = username + '哈哈')

    return {
        username,
        addUser,
        changeUserS,
        getUserInfo
    }
    
    // const {username} = storeToRefs(useUserStore())  storeToRefs用于解构后的数据还能保留响应式  方法不需要响应式
},{

    // 下载插件pinia-plugin-persistedstate  并在main中配置

    persist: true,  // 可以本地持久化 这是一个封装好的插件，自动帮存到本地localStorage
    persist: {  // 想要开启并有其他配置 改成对象写法就行了
        key: 'new-user-persist',   // 更改localStorage中的键名
        storage: 'sessionStorage', // 默认存的是localStorage 可以改成sessionStorage
        pick: ['username','obj.name'],   // state中哪些数据需要持久化
    },  
})
