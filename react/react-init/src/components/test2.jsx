import { createContext, useContext, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement, addNum} from '../store/modules/countStore.js'
const MsgContext = createContext()   // 这个是在顶层创建的

function A () {
    const inpRef = useRef()
    inpRef.current.checked = true   // current拿到当前元素
    const handleChange = (name,e) => {
        const msg = e.target.checked ? 'checked' : 'unchecked'
        console.log(name)
    }
    return (
        <>
            <B />
            <input
                ref={inpRef} 
                onChange={(e) => handleChange('jack',e)}
                // onChange={() => handleChange('jack')}
                type="checkbox" 
                name="" 
                id="" 
            />
        </>

    )
}

function B () {
    const msgB = useContext(MsgContext)

    // 副作用 理解为生命周期 不传为初+更新 传空数组为初 其他依赖项为watch
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('打印')
        }, 1000)

        return () => {
            clearInterval(timer)
        }  // 常见return就是卸载时执行 清除副作用
    },[])

    return (
        <>
            {msgB}
        </>
    )
}

export default function test2() {
    const msg = 'this a test2'
    const {count} = useSelector(state => state.count)
    const dispatch = useDispatch()
    return (
        <>
            <MsgContext.Provider value={msg}>
                Provider
                {count}
                <button onClick={() => dispatch(increment())}></button>
                <button onClick={() => dispatch(addNum(10))}></button>
                <A />
            </MsgContext.Provider>
        </>
    )
}