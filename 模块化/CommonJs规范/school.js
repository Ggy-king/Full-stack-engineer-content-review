const name = '清华'

function getSchool() {
    return '学校模块'
}

function school() {
    return '方法'
}

exports.name = name
exports.getSchool = getSchool


module.exports = { name, getSchool }
// 注意一个细节 不管你怎么写，最终你导出的都是module.exports所指向的那个对象 也就是导出module.exports的语句执行的代码

// 注意像module exports require都不是windows上的语句 而是commonjs语句也就是node身上的语句方法
// 其实当你这样使用js文件的时候就是相当于你把这个js文件里的所有语句都封装在一个函数里，然后把这个函数返回出去 如下


/*


function (exports, require, module, __filename, __dirname) {
    const name = '清华'

    function getSchool() {
        return '学校模块'
    }

    function school() {
        return '方法'
    }

    exports.name = name
    exports.getSchool = getSchool


    module.exports = { name, getSchool }
    // 注意一个细节 不管你怎么写，最终你导出的都是module.exports所指向的那个对象 也就是导出module.exports的语句执行的代码

    // 注意像module exports require都不是windows上的语句 而是commonjs语句也就是node身上的语句方法
    // 其实当你这样使用js文件的时候就是相当于你把这个js文件里的所有语句都封装在一个函数里，然后把这个函数返回出去 如下
}

*/ 
