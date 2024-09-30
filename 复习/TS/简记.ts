// example.ts  
  
// 1. 变量声明  
let isDone: boolean = false;  
let age: number = 25;  
let name: string = "Alice";  
  
// 数组  
let hobbies: string[] = ["reading", "traveling", "coding"];  
  
// 元组（Tuple）  
let person: [string, number] = ["Bob", 30];  
  
// 枚举（Enum）  
enum Direction {  
    Up,  
    Down,  
    Left,  
    Right  
}  
let direction: Direction = Direction.Up;  
  
// 2. 函数  
function greet(name: string): string {  
    return `Hello, ${name}!`;  
}  
  
// 可选参数和默认参数  
function printInfo(name: string, age?: number, country: string = "USA"): void {  
    console.log(`Name: ${name}, Age: ${age || "Unknown"}, Country: ${country}`);  
}  
  
// 3. 接口（Interface）  
interface Person {  
    name: string;  
    age: number;  
    greet(otherName: string): string;  
}  
  
let alice: Person = {  
    name: "Alice",  
    age: 25,  
    greet: function(otherName: string) {  
        return `Hello, ${otherName}. My name is ${this.name}.`;  
    }  
};  
  
// 4. 类（Class）  
class Animal {  
    name: string;  
  
    constructor(name: string) {  
        this.name = name;  
    }  
  
    move(distanceInMeters: number = 0) {  
        console.log(`${this.name} moved ${distanceInMeters}m.`);  
    }  
}  
  
class Dog extends Animal {  
    breed: string;  
  
    constructor(name: string, breed: string) {  
        super(name);  
        this.breed = breed;  
    }  
  
    bark() {  
        console.log(`${this.name} says Woof!`);  
    }  
}  
  
let dog: Dog = new Dog("Rex", "German Shepherd");  
dog.bark();  
dog.move(10);  
  
// 5. 类型断言  
let someValue: any = "this is a string";  
let strLength: number = (someValue as string).length;  
  
// 6. 泛型  
function identity<T>(arg: T): T {  
    return arg;  
}  
  
let output = identity<string>("myString");  
console.log(output);  
  
// 7. 装饰器（Decorator，注意：装饰器是实验性功能，需要额外的配置才能使用）  
// 由于装饰器目前还是实验性功能，并且需要TypeScript配置文件的支持，这里只提供一个简单的示例概念  
// function log(target: any, propertyName: string, descriptor: PropertyDescriptor) {  
//     console.log(`Property ${propertyName} will be logged.`);  
  
//     let originalMethod = descriptor.value;  
  
//     descriptor.value = function (...args: any[]) {  
//         console.log(`Calling ${propertyName} with args: ${args}`);  
//         let result = originalMethod.apply(this, args);  
//         console.log(`${propertyName} returned: ${result}`);  
//         return result;  
//     };  
  
//     return descriptor;  
// }  
  
// class Calculator {  
//     @log  
//     add(a: number, b: number) {  
//         return a + b;  
//     }  
// }  
  
// let calc = new Calculator();  
// calc.add(1, 2);  
  
// 要在TypeScript中使用装饰器，需要在tsconfig.json中启用实验性装饰器支持，并且可能需要安装额外的依赖。  
  