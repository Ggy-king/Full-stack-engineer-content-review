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