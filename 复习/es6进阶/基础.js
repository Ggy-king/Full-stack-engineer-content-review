// 1
let uname
const age = 18

// 都用const 什么时候报错什么时候用let

// 2
模版字符串

// 3
function add(a = 10,b = 6){}
function add(a,b = getVal(5)){}  // 默认值也可以是函数

function add(a){arguments}  // arguments动态参数 不用写在形参里 函数体里默认有  这是es5写法
function add(a,...args){}  //  ...是剩余参数 需要写在形参里 args为数组  es6写法

// 4
Math.max.apply(null,arr)  === Math.max(...arr) // 扩展运算符

// 5
;() => {}   // 箭头函数没有arguments 也不能使用new关键字来实例化对象 let Person = () => {}; new Person()是错误的

// 6
const {type,arr:[a = 10,,{fame}]} = data

// 7
const person = {sex,family} // 同名可简写

// 8
Object.is(NaN,NaN)  // is方法与===作用完全一致
Object.assign(obj,ojb1,obj2,obj3)   // 数组的合并 将后面都复制到第一个obj 浅拷贝

// 9
Symbol()  // Symbol是一种数据类型，数据类型明白吗 想数字字符串数组都是数据类型   Symbol最大的作用就是表示一个独一无二的值，或用来定义对象的私有变量
const sym = Symbol('sym')  // 打印的结果Symbol[sym]
let objSym = {
    [sym] : '私有属性'    // 对象里面想用这个类型作为键 需要加[] 注意该属性无法被遍历被迭代也就是无法被查找
}
Object.getOwnPropertySymbols() // 可以用这个找