
// 1 from
Array.from(arr) // 将伪数组转化为真数组
Array.from(arr, ele => ele.textContent)  // 接受第二个参数

// 2 of
Array.of(3, 4, "45", { id: 1 })  // 可以将任意数据类型转化成数组

// 3 find
arr.find(n => n > 2)  // 找出第一个满足条件的成员

// 4 findIndex

arr.findIndex(n => n > 2)  // 找出第一个满足条件的成员的索引
