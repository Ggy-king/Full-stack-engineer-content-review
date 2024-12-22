// interface
// 他是接口就是一种定义结构的方式 一种规定的契约精神 只能定义格式不能有具体实现 抽象类是可以有具体实现的

/**
 *  接口的出场率很高 
 * 当你需要定义对象的格式的时候就需要接口  1 描述数据模型 2 API响应格式 3 配置对象
 */




// 1 定义类的结构 interface implements类实现接口
interface PersonInterface {
    name: string,
    age: number,
    speak(n: number): void
}

class Person2 implements PersonInterface { // implements是实现的意思表示遵循什么接口的规则 类似extends 
    constructor(
        public name: string,
        public age: number
    ) {

    }
    speak(n: number): void {
        console.log(this.name, this.age, n)
    }
}


// 2 定义对象的结构
interface UserInterface {
    name: string,
    age?: number,
    readonly gender: number,
    run(): void
}

const user: UserInterface = {
    name: '张珊',
    age: 12,
    gender: 7,
    run() {
        console.log('你好');
    },
}


// 3 定义函数接口
interface FunInterface {
    (a: number, b: number): number
}

const fun: FunInterface = (a, b) => {
    return a + b
}


// 4 接口之间可以继承
interface ExtendInterface extends UserInterface {
    add: () => string
}

// 5 接口可以重复定义 称为接口合并
interface ExtendInterface {     // 重复定义 则你使用的时候都要满足
    add: () => string
    remove: number
}


// 6 type 与 interface

/**
 *  都可以用来定义对象格式 很多时候两个没有区别 可以互换
 *  interface更专注定义对象和类 可以继承和合并
 *  type可以联合交叉 type Status = 'success' | 'error' type可以定义常量但interface
 * 
 *  大部分的时候interface 定义常量的时候用type
 * 
 */
interface TechnologyInterface {
    electron: string
    level: number
    development(): void
}

type TechnologyType = {
    electron: string
    level: number
    development(): void
}




// 7 interface与抽象类的区别
/**
 *  接口是一点活不能做 完全的定义规则只能描述结构 并且一个类可以实现多个接口
 *  抽象类可以描述结构(抽象方法)也可以有具体实现 但是一个类只能继承一个抽象类
 */

class Swim implements TechnologyInterface, UserInterface {
    constructor(
        public electron: string,
        public name: string,
        public gender: number,
        public level: number,
    ) { }
    development(): void { }
    run(): void { }
}





// 8 泛型 想理解泛型首先思考一个问题，如果你想设置一个参数返回值多类型的函数、接口、组件怎么办，是不是需要复制多写几个
//        或者说我们可以自定义类型 但都没有使用泛型更方便更安全

// 泛型就是 <T> 其中T可以为任意字符
function logData<T, U>(data1: T, data2: U): T | U { // 泛型可以有多个 用,间隔   T | U返回值联合类型 T或U
    return Date.now() % 2 ? data1 : data2
}

logData<number,string>(100,'hello')
logData<string,boolean>('ok',true)


// 泛型接口
interface CarsInterface<T> {
    name: string,
    other: T   // 就是不知道什么类型 可以等实现的时候再定义类型
}
let p:CarsInterface<string> = {
    name: '兰博基尼',
    other: '限量'
}

// 泛型类
type special = {
    title: string,
    num:number
}
class NoteBook<T> {
    constructor(
        public model:string,
        protected other: T
    ) {}
}
const n1 = new NoteBook<special>('小新',{title:'L系列',num: 15})






// 最后讲一下类型声明文件 .d.ts
/**
 * 你会发现有些文件是.d.ts结尾 这是为何呢？ 我们使用很多库都是js库 在ts中是没法使用js暴露出的函数属性的，
 * 所以我们需要重新定义一个与js文件名完全一样的文件但是尾缀名是.d.ts 这个在这个文件只需要做一件事
 * 就是把同名js文件中暴露的属性函数用ts的方法重新暴露 这样ts中还是引入那个js文件就不会报错了
 * 现在的库 通常都会在@types文件夹下配置.d.ts文件
 */