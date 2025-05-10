import { Fragment, createContext, useContext, useState } from "react"

function Detail ({children, content, active, onActive, footer = <></>}) {  
     // children为关键字 表示插槽内容
     // 如果某些属性为可选 记得设置默认值
    const [status, setStatus] = useState(true)
    function handleClick () {
        setStatus(!status)
        onActive(status)   // 直接在父组件中子组件上设置自定义属性 这个属性绑定成一个函数 在子组件中接收就行
    }


    return (
        <>
            <p>{content}</p>
            <p>{active ? "显示中" : "隐藏中"}</p>
            <div>{children}</div>
            <div>{footer}</div>

            <button onClick={handleClick}>改变</button>
            <span style={{
                display: status ? "block" : "none",
                fontSize: "18px"
            }}></span>
        </>
    )
}


function Son ({title,detailData}) {
    const [imgUrl , setImgUrl] = useState("图片地址")
    const imgStyleObj = {
        width: 200,
        height: 200,
        backgroundColor: "red"
    }

    function handleActive (status) {
        console.log(status)
    }

    return (
        <>
            <div>{title}</div>
            <Detail detailData={detailData} footer={<p>这里是类vue具名插槽</p>}>
                <li>插槽1</li>
                <li>插槽2</li>
                <li>插槽1</li>
            </Detail>
            <Detail 
                detailData={detailData}
                onActive={handleActive}
            />
                

            
            <img 
                src={imgUrl} 
                alt="必要属性" 
                style={imgStyleObj}
                // {...imgUrl}  可以使用展开运算 但是有注意点 这其实是jsx单独做的处理
            />
        </>
    )
}

export default function Father () {
    // const list = [
    //     {id: 1, name: '张三', age: 18},
    //     {id: 2, name: '李四', age: 14},
    //     {id: 3, name: '王五', age: 19},
    // ]
    const [data, setData] = useState([
        {id: 1, name: '张三', age: 18},
        {id: 2, name: '李四', age: 14},
        {id: 3, name: '王五', age: 19},
    ])
    const listData = data.map(item => (
        <li key={item.id}>{item.name}</li>
    ))

    function handleClick() {
        // 修改响应式数据时是直接替换
        setData([
            ...data,
            {id: ++id, name: '高六', age: 20}
        ]) 
        setData(data.filter(item => item.id !== 2)) // 删除数组中元素的操作
    }

    const LevelContext = createContext(2) // 创建一个穿透变量 主要用来跨越多级共享数据避免层层传递props
    const level = useContext(LevelContext) // 使用这个穿透变量


    const sonData = {
        title: '标题一',
        detail: {
            content: "内容一",
            active
        }
    }
    return(
        <Fragment>
            <ul>{listData}</ul>
            <button onClick={handleClick}>点击</button>

            <div>组件间传值</div>
            <Son 
                {...sonData}
            />
            <Son 
                {...sonData}
                title="标题二"
            />

            {/* 使用Provider包裹需要穿透的组件 */}
            <LevelContext.Provider value={level}>
                组件嵌套多组件
                
            </LevelContext.Provider>
            
        </Fragment>
    )
}