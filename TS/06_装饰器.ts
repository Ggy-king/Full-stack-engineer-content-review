// 装饰器是一种特殊的函数 他可以对类、属性、方法、参数进行扩展
// experimentalDecorators:true 打开实现装饰器  装饰器还在测试阶段



/**
 * 类装饰器
 * 属性装饰器
 * 方法装饰器
 * 访问器装饰器
 * 参数装饰器
 */


/**
 * 1 类装饰器
 * 装饰器都是一个函数 第一个参数是目标 你需要装饰的对象
 * 通过@函数名 来去自动执行函数而且自动将下方定义的类变成目标对象  如下在class上面执行@函数名 会自动将下方class传入
 */

function CustomString(target: Function) {
    target.prototype.toString = function () {   // 在目标原型链上添加一个toString方法
        return JSON.stringify(this)   // 调这个方法就会执行返回json字符串
    }

}

@CustomString
class Person1 {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const cus = new Person1('张三', 18)
cus.toString()


/**
 * 2 class类(构造类型)的类型    ts中没有类的类型 但是我们可以自己定义
 * 
 *  new        表示该类型可以用new操作符调用
 *  ...args    表示构造器可以接受任意数量的参数
 *  any[]      表示构造器可以接受任意类型的参数
 *  {}         表示返回类型是非null、非undefined的对象
 * 
 */
type Constructor = new (...args: any[]) => {}

function LogTime<T extends Constructor>(target: T) {    // <T extends Constructor>是泛型约束
    return class extends target {
        createTime: Date                  // 返回一个新类 并继承原类
        constructor(...args: any[]) {                      // 接受任意类型 任意数量
            super(...args)
            this.createTime = new Date()
        }
    }
}