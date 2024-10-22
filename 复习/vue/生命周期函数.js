// 生命周期函数

// 创建 - 挂载 - 更新 - 销毁   四个阶段

// 每个阶段都有两个生命周期函数 分别在各个阶段前后出现 如创建前、创建后

beforeCreate
created     // 发送初始化渲染请求
beforeMount
mounted   // 操作dom
beforeUpdate
updated
beforeDestroy  // 释放vue以外的资源 如定时器
destroyed