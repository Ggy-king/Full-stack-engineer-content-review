// ts中新类型
/** 1 any*/
const any: any = 123   // any表示任意类型 any类型意味着放弃类型检查 注意点any类型可以赋值给任何你已经规定类型的变量 所以谨慎使用





/** 2 unknown*/
const unknown: unknown = undefined  // unknown 不知道数据类型 可以一直赋值到最后 但是会一直是unknown类型

let x: undefined
if (typeof unknown === 'undefined') {  // 第一种将unknown保护的数据赋值给明确类型的方法
    x = unknown
}
x = unknown as undefined   // as 为类型断言 第二种将unknown保护的数据赋值并转化成明确类型的方法
x = <undefined>unknown  // <string> 第二种断言的方法





/** 3 never*/
function never(): never {
    throw new Error('程序运行异常')  // 不能顺利回调结束
    // never()  // 自己调自己 调不完
}  // never是用来限制函数的 函数只能有两种情况 一是函数不能顺利的回调结束 二是函数永远调不完





/** 4 void*/
function logMsg(): void {    // void是空的意思 通常用于限制函数。函数返回值为空 即undefined,调用者也不应该使用其的返回值
    console.log('void');     // 但是 function undef(): undefined {}是可以被其他变量接受 也就是作为新的结果使用
}





/** 5 tuple 没有关键字*/
// 元组就是一种特殊的数组类型 可以存储固定数量的元素 并且每一个元素的类型是已知的 ?表示可选元素
const tuple: [string, number, number?] = ['字符', 12]   // 数组类型是number[] 元组类型是[number,string]
const tuple2: [string, ...number[]] = ['字符', 1, 2, 3, 6]   // ...number[] 这样写的话就是表示可以续写无限多个数字类型






/** 6 enum*/
// 枚举 很重要的一个概念 就是定义一组常量 增加代码的可读性 写法与class极其相似 enum Person {}
//    1 数字枚举 字符串枚举
enum Direction {
    Up,
    Down = 'down',  //也可以写对应的字符串 但丢失反向映射 字符串是没有相互调的功能只能 .Down调出 不能['down']
    Left = 15,  // 可以随便写对应的数字 都会默认下一个递增 常量和数字的反向映射的 既可以.Left又可以[15]
    Right
} // 打印的结果 {0:'Up',1:'Down',2:'Left',3:'Right',Up: 0,Down: 1,Left: 2,Right: 3}

function walk(str:Direction){Direction[1] === 'Down'} // 规定参数只能是枚举中的常数，这样的话不管是写函数的还是调用函数的人都不容易写错
walk(Direction.Up)

// 2 常量枚举  如果使用常量枚举则会大幅度减少js生成的代码 就是用谁了就生成谁的
const enum Person {  // 只需要加上const 就是常量枚举 它在编译时会被内联 所谓的内联就是ts在编译时会将成员引用换成常量值 进而减少代码
    Name,
    Age,
    Country
}




/** 7 type*/
// type是为任意别名创建类型 就是可以创建任意类型 
type shuzi = number  // 简单使用
const numT: shuzi = 20

// 联合类型
type Status = string | number // 联合类型 中间的|叫管道符   表示status可以是string或number类型之一
type Gender = '男' | '女' // 联合类型 中间的|叫管道符   表示status可以是string或number类型之一

// 交叉类型
type Address = {   // 既是对象 也必须要有三个属性 而且三个属性必须对应其类型
    num: number,
    cell: number,  //单元号
    room: string  // 房间号
}
type Area = {
    height: number,
    width: number
}
type House = Address & Area  // 交叉类型 既是Address类型也得是Area类型

// 特殊情况
type LogFunc = () => void  // 定义了一个函数类型 并且返回值为空
const f1: LogFunc = function () {
    return 666   
    // 这里其实是可以返回任意值 而不需要是空 你知道为什么吗 因为箭头函数简写的时候默认会return 你不能说为了void成立放弃箭头函数简写
    // 虽然有返回值 但是他依然遵循着void的规则 不能把该返回值作为结果接收 也就是不能使用
}