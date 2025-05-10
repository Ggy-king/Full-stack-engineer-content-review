import { createContext, useContext, useRef } from 'react'
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

    return (
        <>
            {msgB}
        </>
    )
}

export default function test2() {
    const msg = 'this a test2'

    return (
        <>
            <MsgContext.Provider value={msg}>
                Provider
                <A />
            </MsgContext.Provider>
        </>
    )
}