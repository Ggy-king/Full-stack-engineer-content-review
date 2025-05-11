import {createSlice} from '@reduxjs/toolkit'

const countStore = createSlice({
    name: 'count',

    // 初始化
    initialState:  {
        count: 0
    },

    // 修改状态的方法
    reducers: {
        increment(state) {
            state.count += 1
        },
        decrement(state) {
            state.count -= 1
        },
        addNum(state,actions) {
            state.count = actions.payload   // actions是第二个参数接受外部传值 自动会被payload接受
        }
    }
})

// 异步函数 固定形式 主要通过return新函数以及再次调用dispatch
const { addNum } = countStore.actions
const fetchData = () => {
    return async (dispatch) => {
        const res = await fetch('http')
        dispatch(addNum(res.json()))
    }
}



const reducer = countStore.reducer   // 获取整个模块

export const {increment, decrement} = countStore.actions  // 按需导出方法
export { addNum,fetchData }  // 按需导出方法
export default reducer