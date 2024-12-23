// 1 属性修饰符 public
class School2 {
    public name: string   // 1 public公共的(默认) 内部 子类 外部 都能访问到
    protected age: number  // 2 protected收保护的 内部 子类 能访问到
    private money: number // 3 private私有的 只能在内部访问
    public readonly N = 123  // 4 readonly 只读的 不能修改 内部外部子类都不能修改 如果是N:number 那么在变成实例后第一次赋值后不能修改

    constructor(name: string, age: number, money: number) {
        this.name = name
        this.age = age
        this.money = money
    }

    speak() {
        console.log(`我要说话了，${this.name}+${this.age}`)  // 内部
    }
}

const p2 = new School('大海学校', 15)
p2.name // 外部



class Student2 extends School2 {
    say() {
        console.log(`我是赵素葳，${this.name}`)  // 子类
    }
}



// 2 简写  定义与指向不写 修饰符写在构造函数内  必须写修饰符
class School3 {
    constructor(
        public name: string,
        protected age: number,
        private money: number,
        private readonly A = 1,
        protected readonly B = 1,
        public readonly C = 1
    ) { }
}




// 3 抽象类 abstract 就是一种无法被实例化的类，专门用来定义类的结构和行为，类中可以写抽象方法，也可以写具体实现。
// 主要的意义就是为了让别人继承他 要求派生类中要有他的方法与属性
abstract class Package {  // abstract抽象类定义 不能被实例化 能继承
    // 构造方法
    constructor(public weight: number) { }

    // 抽象方法
    abstract calculate(): number   // 不能有函数体 是抽象的 只是规定有多少参数返回值是什么类型  函数体要在子类中写

    // 具体方法
    printPackage() {
        console.log(`重量是${this.weight},运费是${this.calculate()}`)  // 这里的calculate()会调用继承中的有函数体的calculate

    }
}

class StanderPackage extends Package {  // 想要继承抽象类 那里面必须要有抽象类的所有方法与属性
    constructor(
        weight: number,
        private num: number
    ) {
        super(weight)
    }

    calculate(): number {
        return this.weight * this.num
    }
}

const s1 = new StanderPackage(10, 5)
s1.printPackage()

