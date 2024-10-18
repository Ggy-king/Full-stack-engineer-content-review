src = "https://unpkg.com/form-serialize@0.7.2/form-serialize.min.js"




document.querySelector('.btn').addEventListener('click', function () {
    const form = document.querySelector('.form')


    serialize(form, { hash: true, empty:true })          // serialize是form-serialize的函数 用来收集表单元素 无需程序员自己设置

    // hash是收集参数的格式
    // true是对象格式 false是查询参数字符串的格式(就是url?后面的)

    // empty表示是否收集空值 true表示收集 就是空字符串
})

