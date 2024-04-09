// 安装nodejs是为了将es6代码转码成es5代码 babel转码器
// es6只是为了程序员更方便 但浏览器并不一定能支持 需要nodejs帮助转码
// nodejs主攻服务器方向 里面也会有很多的包 在实现前端开发使用其他人的成果时 通过npm下载也是很好用的

1
/**
 * var只有函数作用域 可重复声明 有变量提升 只在当前作用域下提升声明 不提升值
 * let是花括号级别作用域 
 * const与let的区别只有一点就是const设置的值无法改变
 * 
 * 作用域链的本质就是底层的变量查找机制 即就近原则
 */

2
/**
 * 垃圾回收机制 分配-使用-回收
 * 声明变量 对象 函数的时候系统会自动分配内存
 * 而当我们不使用的时候系统自动回收掉解放内存 一般回收局部变量使用完就立马回收 而全局变量则不会回收
 * 内存泄露指的是内存由于某种原因内存未释放
 * 
 * 栈：简单数据类型系统自动分配释放的存放点
 * 堆：复杂数据类型程序员分配释放的存放点 ----- 若程序员不释放堆中复杂数据 则由垃圾回收机制执行
 * 
 * 引用计数法(现在大部分已不再使用) 当引用次数为0时，垃圾自动回收 常用赋值null来达到此效果 缺点是对象相互指引时无法清除会内存泄露
 * 标记清除法 从根部出发定期查找 能找的留着 找不到的标记后自动清除 解决了相互指引的问题
 */

3
/**
 * 闭包 就是内层函数+外层函数的变量
 * 闭包应用：数据的私有  但是有可能会有内存泄露
 */

4
/**
 * arguments 动态参数 只存在于函数里面 作用是不知道有多少参数时使用arguments
 * arguments 伪数组
 * 
 * ...arr  ...+任意名称  剩余参数 类似于arguments 区别在于剩余参数可以实现至少有多少参数的功能，并且剩余参数是真的数组 开发中提倡使用剩余参数
 * ... 也是展开运算符
 */
function getSum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum)
}
getSum(1, 2, 5, 6, 8, 9)

5
/**
 * 箭头函数 () => {}  主要用于需要匿名函数的地方(就是函数没有名字)
 *  只有一个形参的时候小括号可以省略
 *  只有一行代码的时候可以省略大括号{}  一行代码的时候如果有返回值的时候return也可以省略
 *  const fn = (uname) => ({uname}) 直接返回一个对象 你可以不这样用但你得认识  ({uname})等价于{{uname:uname}}
 * 
 *  以前this 谁调用指向谁
 *  箭头函数中没有this 箭头函数只会沿用上一层作用域的this 注意：是沿用上一层的this指向，而不是指向上一层
 */

6
/**
 * 解构赋值
 *  const [a,b,c] = [1,2,3];const [a,b,c] = arr
 *  const [a=0,b=0,c=0] = [1,2]; 添加默认参数 防止undefined传递
 *  const [a,,c] = [1,2.3]; ,,忽略
 * 
 *  const {uname,age} = {uname:"123",age:19}  结构对象也是一样 注意就是结构的变量名要与对象里的属性名一样
 *  const {uname:username,age:youngAge} = {uname:"123",age:19}  改名的方式
 */
let a = 1; let b = 2;
[b, a] = [a, b]  //交换变量

const pig = {
    name: '格曼',
    family: {
        mother: 'da',
        son: 'hha',
        sister: 'xia'
    },
    age: 6
}
const { name, family: { mother, son, sister = 'know' } } = pig;  //多级解构

/**
 * 7 forEach() 用于调用数组每个元素 并将数组传递给回调函数   不能遍历对象只能遍历数组
 *  场景应用于遍历数组的每个函数 只遍历不返回值   加强版的for循环 适合遍历数组对象
 */
arr.forEach((element, index) => {
});  //类似map

/**
 * 8 filter() 过滤 map forEach filter写法都一样
 * 返回一个新的数组 把满足条件的都选出来
 */
arr.filter((item, index) => {
})

/**
 * 9 创建对象
 *  new Object({uname:"red"})
 *  自定义构造函数  使用场景是快速创建一些类似的对象
 *  构造函数return无效 new是实例化构造函数的意思
 */
function Pig(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender

}
const Lucy = new Pig('露西', 19, '女')
const Daw = new Pig('大卫', 21, "男")