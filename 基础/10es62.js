1
// Object 内置构造函数 
// 3 个 静态方法 
Object.keys(对象)  //获取所有属性名 注意是名 返回数组形式
Object.values(对象) //获取所有属性值 返回数组形式
Object.assign(前,后拷贝给前) //拷贝对象 场景是添加其他属性

// Object.assign(o,{gender:"男"})


2
/**
 * Array 内置构造函数
 * forEach查找 filter筛选 map处理 reduce求和
 */
arr.reduce(function(prev,current){   // 上一次值(返回值) 当前值
    return prev + current
},0)  // 后面可以加上初始值,0 尽量要写可以避免很多其他形式的数组计算

arr.every() //如果所有元素都符合则返回true
arr.some() //只要有 元素都符合则返回true
arr.find(item => item.name === '小米') //返回数组元素  