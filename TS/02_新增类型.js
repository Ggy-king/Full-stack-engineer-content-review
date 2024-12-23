"use strict";
// ts中新类型
/** 1 any*/
const any = 123; // any表示任意类型 any类型意味着放弃类型检查 注意点any类型可以赋值给任何你已经规定类型的变量 所以谨慎使用
/** 2 unknown*/
const unknown = undefined; // unknown 不知道数据类型 可以一直赋值到最后 但是会一直是unknown类型
let x;
if (typeof unknown === 'undefined') { // 第一种将unknown保护的数据赋值给明确类型的方法
    x = unknown;
}
x = unknown; // as 为类型断言 第二种将unknown保护的数据赋值并转化成明确类型的方法
x = unknown; // <string> 第二种断言的方法
/** 3 never*/
function never() {
    throw new Error('程序运行异常'); // 不能顺利回调结束
    // never()  // 自己调自己 调不完
} // never是用来限制函数的 函数只能有两种情况 一是函数不能顺利的回调结束 二是函数永远调不完
/** 4 void*/
function logMsg() {
    console.log('void'); // 但是 function undef(): undefined {}是可以被其他变量接受 也就是作为新的结果使用
}
/** 5 tuple 没有关键字*/
// 元组就是一种特殊的数组类型 可以存储固定数量的元素 并且每一个元素的类型是已知的 ?表示可选元素
const tuple = ['字符', 12]; // 数组类型是number[] 元组类型是[number,string]
const tuple2 = ['字符', 1, 2, 3, 6]; // ...number[] 这样写的话就是表示可以续写无限多个数字类型
/** 6 enum*/
// 枚举 很重要的一个概念 就是定义一组常量 增加代码的可读性 写法与class极其相似 enum Person {}
//    1 数字枚举 字符串枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction["Down"] = "down";
    Direction[Direction["Left"] = 15] = "Left";
    Direction[Direction["Right"] = 16] = "Right";
})(Direction || (Direction = {})); // 打印的结果 {0:'Up',1:'Down',2:'Left',3:'Right',Up: 0,Down: 1,Left: 2,Right: 3}
function walk(str) { Direction[1] === 'Down'; } // 规定参数只能是枚举中的常数，这样的话不管是写函数的还是调用函数的人都不容易写错
walk(Direction.Up);
const numT = 20;
const f1 = function () {
    return 666;
    // 这里其实是可以返回任意值 而不需要是空 你知道为什么吗 因为箭头函数简写的时候默认会return 你不能说为了void成立放弃箭头函数简写
    // 虽然有返回值 但是他依然遵循着void的规则 不能把该返回值作为结果接收 也就是不能使用
};
