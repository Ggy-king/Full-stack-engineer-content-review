// 生命周期函数

// 创建 - 挂载 - 更新 - 销毁   四个阶段

// 每个阶段都有两个生命周期函数 分别在各个阶段前后出现 如创建前、创建后

const app = new Vue({
    data: {
        beforeCreate,
        created,     // 发送初始化渲染请求
        beforeMount,
        mounted,  // 操作dom
        beforeUpdate,
        updated,
        beforeDestroy,  // 释放vue以外的资源 如定时器
        destroyed,
    },
    // 1 创建阶段 准备数据  响应式数据准备之前
    beforeCreate() {
        
    },
    // 2 数据准备完成之后
    created() {
        
    },
    // 3 挂载阶段 vue模版渲染之前
    beforeCreate() {
        
    },
    // 4 vue模版渲染之后
    created() {
        
    },
    // 剩下两个阶段使用没有那么多
    // 5 更新阶段 数据修改了，但视图没有更新
    beforeUpdate() {
        
    },
    // 6 视图更新后
    updated() {
        
    },
    // 7 卸载阶段 卸载前
    beforeDestroy() {
        // 通常在这里处理掉一些定时器
        
    },
    // 8 卸载后     
    destroyed() {
        
    },



})

app.$destroyed() // vue提供的卸载当前实例的方法

// -------------------------------------------------------------
