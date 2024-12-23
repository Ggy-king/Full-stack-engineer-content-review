"use strict";
// interface
// 他是接口就是一种定义结构的方式 一种规定的契约精神 只能定义格式不能有具体实现 抽象类是可以有具体实现的
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak(n) {
        console.log(this.name, this.age, n);
    }
}
const user = {
    name: '张珊',
    age: 12,
    gender: 7,
    run() {
        console.log('你好');
    },
};
const fun = (a, b) => {
    return a + b;
};
// 7 interface与抽象类的区别
/**
 *  接口是一点活不能做 完全的定义规则只能描述结构 并且一个类可以实现多个接口
 *  抽象类可以描述结构(抽象方法)也可以有具体实现 但是一个类只能继承一个抽象类
 */
class Swim {
    constructor(electron, name, gender, level) {
        this.electron = electron;
        this.name = name;
        this.gender = gender;
        this.level = level;
    }
    development() { }
    run() { }
}
// 8 泛型 想理解泛型首先思考一个问题，如果你想设置一个参数返回值多类型的函数、接口、组件怎么办，是不是需要复制多写几个
//        或者说我们可以自定义类型 但都没有使用泛型更方便更安全
// 泛型就是 <T> 其中T可以为任意字符
function logData(data1, data2) {
    return Date.now() % 2 ? data1 : data2;
}
logData(100, 'hello');
logData('ok', true);
let p = {
    name: '兰博基尼',
    other: '限量'
};
class NoteBook {
    constructor(model, other) {
        this.model = model;
        this.other = other;
    }
}
const n1 = new NoteBook('小新', { title: 'L系列', num: 15 });
// 最后讲一下类型声明文件 .d.ts
/**
 * 你会发现有些文件是.d.ts结尾 这是为何呢？ 我们使用很多库都是js库 在ts中是没法使用js暴露出的函数属性的，
 * 所以我们需要重新定义一个与js文件名完全一样的文件但是尾缀名是.d.ts 这个在这个文件只需要做一件事
 * 就是把同名js文件中暴露的属性函数用ts的方法重新暴露 这样ts中还是引入那个js文件就不会报错了
 * 现在的库 通常都会在@types文件夹下配置.d.ts文件
 */ 
