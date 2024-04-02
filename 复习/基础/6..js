// 数字 字符串 undefined 布尔 bull 对象  原六种数据类型
// Symbol BigInt 新增两种数据类型

/* 
1 typeof运算符
    js有三种方法可以确定数据是什么类型
    typeof常用于判断基本数据类型
    判断数组与对象与null返回都是object
    undefined返回还是undefined
*/
var age = 18;
var names = "你好"
var flag = true
typeof age; //number
typeof names; //string
typeof flag; //boolean 


/*
2 算术运算符
    加减乘除
    取余  %
    自增  ++
    自减  --

3 赋值运算符
    x *= y || x = x * y
    x += y || x = x + y
    等等不一列举

4 比较运算符
    <> <= >= 
    ==与=== 三等为严格相等 及数据类型也需要相等
    != 与 !== 

5 布尔运算符
    ！ 取反
    && 且
    || 或
*/ 
// 只有以下六个值取反后为true其他皆为false ****************
!undefined
!null
!0
!false
!NaN
!""

/**
 * 6 switch语句
 * Switch case break default
 */
switch (key) {
    case value:
        console.log();
        break;

    default:
        console.log();
        break;
}

/**
 * 7 三元运算符
 * (条件)?(真执行这表达式一):(假则执行这表达式二)
 */
var result = num % 2 === 0 ? "偶数" : "奇数"; // 三目运算符可赋值

/**
 * 8 break语句用于跳出代码块或循环
 *   continue语句只用于终止本轮循环
 * 
 * 9 \ 是转移字符 使用场景如双引号中还想显示双引号、字符串里进行换行
 */

/**
 * 10 字符串方法
 *  str.charAt(index) 选出下标位置的字符串
 *  str1.concat(str2) 连接两个字符串并且不改变原字符串 可接受多字符串 不是字符串自动变成字符串
 *  str.substring(start,end) 用于截取字符串 返回结果不包含end的位置 不改变原字符串  里面只填一个参数时就是start到最后所有
 *  str.substr(start,length) 与上一个功能一样 只有参数不一样 1开始位置 2截取长度   若start为负数则倒着数作为开始
 * 
 *  str.indexOf("...",start) 确定一个字符串在里一个字符串中第一次出现的位置，返回结果是匹配开始的位置，返回-1则表示不匹配 start为开始查找的位置
 *  str.trim()  取出两端空格返回新字符串 还可以去除一些制表符等
 *  str.split(str,num) 按照给定方法分割字符串,返回子字符串组成的数组(取前num个) spilt()直接返回数组 spilt("|") spilt("")返回每一个字符
 */

if(str.indexOf("我是你的宝贝") > -1){
    console.log("有这句话");
}

/**
 * 11 数组方法
 *  for...in遍历数组 for(var i in arrays){}
 *  Array.isArray(arr) 判断是否为数组
 *  arr.concat 多数组合并一个数组 原数组不变   只要合并了就是一维数组
 *  arr.reverse() 数组反转 注意其会改变原数组
 * 
 *  arr.indexOf("...",start) 用法与str里面的一样
 *  arr.push("123") 末端添加返回长度  arr.pop() 删除最后一个元素返回该元素
 *  arr.unshift("123") 头部添加返回长度 arr.shift() 删除第一个元素返回该元素
 *  arr.join(".") 以指定参数作为分隔符，连成一个字符串返回 无参数默认为逗号
 */
var arr = [4,5,8,9,6,3]

/**
 * 12 对象
 *  key - value 键-值 键又可以成为属性 如果属性的值为函数 我们又成为这个属性为方法
 *  链式调用就是对象套对象 一直点到没有对象
 */

/**
 * 13 Math
 *  Math.abs() 绝对值
 *  Math.min() Math.max() 最小最大
 *  Math.floor() 向下取整 Math.ceil() 向上取整
 *  Math.random() 0<=1 之前的随机数 如生成任意两数之间的数字
 */
function getRandomArbitrary(min,max) {
    return Math.random() * (max - min) + min
}
