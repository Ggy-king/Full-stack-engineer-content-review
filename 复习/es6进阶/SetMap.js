// Set
const set1 = new Set()   // 无重复数值的有序列表  集合
set1.add(2)
set1.add("4")
set1.add("4")  // {2,"4"}  自动去重
set1.delete(2)
set1.has("4")  // 查看
set1.size  // 集合的长度
set1.forEach((val,key) =>{console.log(val,key)}) // 其实遍历出来的值就是键 键就是值 val == key 因为这是集合 {2:2,"4":"4"}

// 1 set转化成数组
const set2 = new Set([1,2,3,4,5])
const arr = [...set2]

// 2 set中的引用的对象是不能被释放的 释放就是垃圾回收
set2.add(obj)
obj = null // 常用的垃圾回收 但是这里会失效 set引用不能释放
set2.delete(obj) // 可以这样 然后在释放

// 3 WeakSet 解决不能释放的问题 但用的比较少 弱引用
const set3 = new WeakSet()
// WeakSet不能传入非对象以外的参数
// 不能迭代
// 没有size foeEach


// -------- set常用与数组去重，数据筛选，判断元素是否存在    更重要一点


// Map
const map1 = new Map() // Map与map不是一个东西 Map是创建键值对的有序列表 键值可以是任意类型的
map1.set('name','张三')
map1.set([a,[1,2]],'hello')  // {"name" => "张三",Array(2) => "hello"}

// 初始化
let map2 = new Map([["a",1],[b,2]])  // {"a" => 1,b => 2}

// map是有序插入
// --------  map常用缓存数据，映射关系，存储复杂数据类型