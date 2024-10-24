// 为了更好的分类 部分bom中的属性和方法写在了dom中

// screenWidth
// screenHeight

// 1  定时器中的this指向全局环境
var time = setTimeout(() => { }, 3000);  //延迟执行
setInterval(() => { }, 3000);   // 循环间隔执行

clearTimeout(time)  //取消定时器


// 2 防抖 debounce 常用于页面resize事件-页面适配
// 防抖其实就是防止过多次的向服务器发送请求防止浏览器卡死 这个需求很常见需要记住  （浏览器性能有限）
//   滚动事件举例子
window.onscroll = debounce(scrollHandle,300);
function scrollHandle() {
    let scrollTop = document.documentElement.scrollTop;  //onscroll执行频率太高
    console.log(scrollTop);

}
function debounce(fn, delay) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(fn, delay)

    }
}
// 解决办法 在短时间内只执行一次函数 设时间限制

// window.onscroll = debounce(scrollHandle,200);

// 3 节流 throttle 常用于input事件-固定间隔时间搜索
// 其与防抖基本类似 其比防抖只多了一个特点就是希望在一直重新设置定时器时 如果超过了多少时间仍希望有执行

function throttle(fn,delay) {
    let valid = true;
    return function () {
        if(!valid){
            return false;
        }
        valid = false;
        setTimeout(function () {
            fn()
            valid = true
        },delay)
    }
}