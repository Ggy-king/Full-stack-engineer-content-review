// async最大的好处就是让异步编程写起来像同步编程

// 在async函数内 使用await获取Promise对象的成功状态的结果值

// async 关键字只能用在函数前 结合函数进行修饰
// await   必须结合async使用


// ----------------- 你要理解一个概念就是异步的函数是没有办法直接拿到结果的 都需要.then来接受 但是await就是可以直接接受异步函数
// ----------------- 所以await就是让异步编程写同步编程那样写

async function getInfo() {
    const res = await axios({ url })   // res就是axios().then()里面的第一个参数
}

// 常用写法 解决异步回调地狱
// 是不是更像同步的写法呢
async function getRes() {
    const person = await axios({ url: url1 })
    document.querySelector('.person').innerHTML = person.data.data.list[0]
    // 操作一


    const phone = await axios({ url: url2 })
    // 操作二

    const address = await axios({ url: url3 })
    // 操作三

    const email = await axios({ url: url4 })
    // 操作四

}



// ------------------------------
// try {

// } catch (error) {

// } 的使用    注意使用.then不能使用try catch  但是写上async可以

try {
    async function getRes() {
        const person = await axios({ url: url1 })
        document.querySelector('.person').innerHTML = person.data.data.list[0]
        // 操作一


        const phone = await axios({ url: url2 })
        // 操作二

        const address = await axios({ url: url3 })
        // 操作三

        const email = await axios({ url: url4 })
        // 操作四

    }
} catch (err) {
    console.log(err);
} 


async e => {
    await console.log('箭头函数也是函数哦');
}