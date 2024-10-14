// 迭代器
// 迭代器是一种新的遍历机制 可以理解就是自己重新创建一种for循环

// 1 迭代器是一种接口 能快捷的访问数据。是通过Symbol.iterator创建迭代器 然后通过next()方法迭代结果
// 2 迭代器是用于遍历数据结构的指针 其实你可以理解迭代就是注重取数据的过程，而遍历是遍历所有注重结果

const item = [2,4,5,9,"ll"]
const ite = item[Symbol.iterator]()  //固定写法 中括号里加Symbol.iterator
ite.next()
ite.next()
ite.next()


// 生成器
// generator与yield实现异步  其实已经被async与await取代了
function* func() {
    console.log('start')
    yield 2;     // 这里会让函数挂起 也就是执行到这就停止，然后处于等待中，等待下一步命令
    yield 3;
}

const fn = func()  //
fn.next()   // 需要这样调用函数 这样会执行到2这个语句 并且返回的是一个迭代器对象