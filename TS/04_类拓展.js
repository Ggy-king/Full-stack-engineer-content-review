"use strict";
// 1 属性修饰符 public
class School2 {
    constructor(name, age, money) {
        this.N = 123; // 4 readonly 只读的 不能修改 内部外部子类都不能修改 如果是N:number 那么在变成实例后第一次赋值后不能修改
        this.name = name;
        this.age = age;
        this.money = money;
    }
    speak() {
        console.log(`我要说话了，${this.name}+${this.age}`); // 内部
    }
}
const p2 = new School('大海学校', 15);
p2.name; // 外部
class Student2 extends School2 {
    say() {
        console.log(`我是赵素葳，${this.name}`); // 子类
    }
}
// 2 简写  定义与指向不写 修饰符写在构造函数内  必须写修饰符
class School3 {
    constructor(name, age, money, A = 1, B = 1, C = 1) {
        this.name = name;
        this.age = age;
        this.money = money;
        this.A = A;
        this.B = B;
        this.C = C;
    }
}
// 3 抽象类 abstract 就是一种无法被实例化的类，专门用来定义类的结构和行为，类中可以写抽象方法，也可以写具体实现。
// 主要的意义就是为了让别人继承他 要求派生类中要有他的方法与属性
class Package {
    // 构造方法
    constructor(weight) {
        this.weight = weight;
    }
    // 具体方法
    printPackage() {
        console.log(`重量是${this.weight},运费是${this.calculate()}`); // 这里的calculate()会调用继承中的有函数体的calculate
    }
}
class StanderPackage extends Package {
    constructor(weight, num) {
        super(weight);
        this.num = num;
    }
    calculate() {
        return this.weight * this.num;
    }
}
const s1 = new StanderPackage(10, 5);
s1.printPackage();
