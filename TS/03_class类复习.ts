class School {
    // 在School身上定义属性
    name: string
    age: number

    // 使用constructor构造函数接收定义的属性并让它指向未来的实例
    constructor(name: string,age: number) {
        this.name = name
        this.age = age
    }
    speak() {
        console.log('我要说话了');
    }
}
const p1 = new School('大海学校',15)

// 继承 关键字extend
class Student extends School {
    gender: string

    constructor(name: string,age:number,gender:string){
        super(name,age)   // 继承的需要再构造函数中使用super调用父类中的方法与属性
        this.gender = gender  // 继续添加子属性
    }
    // 子类中要复写父类中的方法 直接重写即可或者使用override关键字重写
    override speak() {
        console.log('我想拉屎');
    }
}