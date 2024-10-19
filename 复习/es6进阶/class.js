// class解决了原生js造类比较麻烦

// es5
function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.say = function () { console.log('你好') }
const p1 = new Person('gao', 23)

// es6
class Person2 {
    // 当实例化的时候constructor立即被调用
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    say() {
        console.log('你好');
    }
}

const p2 = new Person2('gao', 22)

// 1 在外面添加方法
Object.assign(Person2.prototype, {
    say2() {
        console.log('你好2');
    }
})

// 2 继承 子承父类
class Uname extends Person2 {  // 方法默认继承了
    constructor(name,color) {
        super(name)  // 就是继承父亲Person2的属性name   相当于Uname.call(this,name)改变name的this指向  

        this.color = color  // 这是自己的
    }
    say() {   // 父类方法默认继承 也可以重写

    }

}
const p5 = new Uname('yuan')