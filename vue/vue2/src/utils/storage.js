// 有些storage调用太麻烦 所以可以封装
const INFO_KEY = 'gg_shopping_info'   // 封装登录个人信息 需要名字长一点防止混淆
const HISTORY_KEY = 'gg_history_list'   // 封装历史记录字段


// 要注意 我们需要实现vuex本地持久化 就是我们希望所有组件共享store中个人user信息所以存储在vuex中。然后通过本地storage实现持久化 刷新也不丢数据

// 获取个人信息
export const getInfo = () => {
    const defaultInfo = {token: '',userId: ''}
    const result = localStorage.getItem(INFO_KEY)
    return result ? JSON.parse(result) : defaultInfo
}
// 设置个人信息
export const setInfo = (info) => {
    localStorage.setItem(INFO_KEY,JSON.stringify(info))
}
// 清除个人信息
export const clearInfo = () => {
    localStorage.removeItem(INFO_KEY)
}


// 去vuex中user看逻辑

// 获取搜索历史
export const geyHistoryList = () => {
    const result = localStorage.getItem(HISTORY_KEY)
    return result ? JSON.parse(result) : []
}

// 设置搜索历史
export const setHistoryList = (arr) => {
    localStorage.setItem(HISTORY_KEY,JSON.stringify(arr))
}