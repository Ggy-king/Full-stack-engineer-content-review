export const name = '清华'   // es6可以直接用export导出  注意common中的exports都有s

export function getSchool() {
    return '学校模块'
}

function school() {
    return '方法'
}

export {
    name,
    school
}

export default {a:1,name,school}  // 默认导出的是一个对象 default :{a:1,name:'清华'}  这种的

// 分别导出export
// 统一导出export {}
// 默认导出