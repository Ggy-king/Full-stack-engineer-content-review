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
const obj = [1, 2, 3, 4]; // 像数组 函数  对象 Date Error class类 构造函数都是object类型
const Obj = [1, 2, 3, 4]; // 大Object能存储能调用Object方法的类型 只有null和undefined不能存 它比小object还能存
const he = 'hello'; // 字面量类型 冒号后面写其他的则你只能存储你写的这个字面量不常用
// 2 注意大写类型与小写类型的区别 简单说就是小写只能存一种就是自己的类型 但大写可以存两种包括自己的值的封装对象
const Str = new String('你好'); // 不仅可以赋值 '你好' 也可以 new String('你好')  推荐小写
/**  object*/
// 定义对象类型 直接用{}里面规定属性和类型即可 就想class类
let person; // [key:string]:any 定义任意类型为string的属性并且值为任意类型 叫索引签名
person = { name: 'ming', hello: '123', key: 123 }; // ?表示可省，索引签名可以续写无数个
// 定义函数类型 ()里面定义参数 加上=>分割符 并确定返回值的类型
let cou; // 注意=> 是分隔符只是为了告诉你这个函数的返回值应该是什么类型的
cou = function (x, y) {
    return x + y;
};
// 声明数组类型 
const arr1 = ['c', 'l', 'h']; // 用类型加上[]表示字符串数组
const arr2 = [1, 2, 3, 5]; // 两种写法 这种写法是泛型  之所以这里大写是因为没有小写的array
// 函数
// function count(x: 接受实参类型, y: 类接实参参型): 函数返回值的类型(要求有return) {
//     return x + y
// }
function count(x, y) {
    return x + y;
}
count(2, 6);
