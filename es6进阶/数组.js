
// 1 from
Array.from(arr) // 将伪数组转化为真数组
Array.from(arr, ele => ele.textContent)  // 接受第二个参数

// 2 of
Array.of(3, 4, "45", { id: 1 })  // 可以将任意数据类型转化成数组

// 3 find
arr.find(n => n > 2)  // 找出第一个满足条件的成员

// 4 findIndex

arr.findIndex(n => n > 2)  // 找出第一个满足条件的成员的索引


// entries() keys() values()   都是返回一个遍历器 就可以用for...of方法进行遍历

for (const index of ['a','b'].keys()) {
    // 数组的keys 就是下标 0 1
}

for (const ele of ['a','b'].values()) {
    // 拿到 a b 就是值
}

for (const [index,ele] of ['a','b'].entries()) {
    // 拿到 0 "a"  1 "b"    entries就是对键值对的遍历
}


// next()方法
const letter = ['a','b','c']
const it = letter.entries()
it.next().value   // 拿到数组中下一个元素的值
it.next().value
it.next().value  


// includes() 返回一个布尔值 判断某个数组中是否包含给定的值
letter.includes(2)  //false