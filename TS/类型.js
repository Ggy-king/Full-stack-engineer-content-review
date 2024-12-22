"use strict";
// 1 原js中8种类型
// const str: 类型 = ...  string number boolean null undefined symbol bigint object
const str = 'abc';
const num = 512;
const bool = true;
const nl = null;
const un = undefined;
const sym = Symbol('唯一标识'); // symbol表示唯一标识 用symbol创建即使值相同也是唯一的
const int = 1234567890123456789012345678901234567890n; // bigint是创建最大值 后面有n  bigint 是一种用于表示任意精度整数的数据类型
const obj = [1, 2, 3, 4]; // 像数组 函数  对象 Date Error都是object类型
// 2 ts中新类型
/** any*/
const any = 123; // any表示任意类型 any类型意味着放弃类型检查 注意点any类型可以赋值给任何你已经规定类型的变量 所以谨慎使用
/** unknown*/
const unknown = undefined; // unknown 不知道数据类型 可以一直赋值到最后 但是会一直是unknown类型
let x;
if (typeof unknown === 'undefined') { // 第一种将unknown保护的数据赋值给明确类型的方法
    x = unknown;
}
x = unknown; // as 为类型断言 第二种将unknown保护的数据赋值并转化成明确类型的方法
x = unknown; // <string> 第二种断言的方法
/** never*/
function never() {
    throw new Error('程序运行异常'); // 不能顺利回调结束
    never(); // 自己调自己 调不完
} // never是用来限制函数的 函数只能有两种情况 一是函数不能顺利的回调结束 二是函数永远调不完
/** void*/
function logMsg() {
    console.log('void'); // 但是 function undef(): undefined {}是可以被其他变量接受 也就是作为新的结果使用
}
/** tuple*/
/** enum*/
const he = 'hello'; // 字面量类型 冒号后面写其他的则你只能存储你写的这个字面量不常用
// 3 注意大写类型与小写类型的区别 简单说就是小写只能存一种就是自己的类型 但大写可以存两种包括自己的值的封装对象
const Str = new String('你好'); // 不仅可以赋值 '你好' 也可以 new String('你好')  推荐小写
// 3 函数
// function count(x: 接受实参类型, y: 类接实参参型): 函数返回值的类型(要求有return) {
//     return x + y
// }
function count(x, y) {
    return x + y;
}
count(2, 6);
