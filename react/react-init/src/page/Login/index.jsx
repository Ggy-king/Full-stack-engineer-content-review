import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom"

export default function Login () {
    const navigate = useNavigate()

    const [params] = useSearchParams()  // 获取路由参数 查询字符串
    const param = useParams()  // 获取路由参数 查询字符串
    const username = params.get('username')
    const id = param.id

    return (
        <>
           <Link to='/login'>声明式导航</Link>
           {/* 二级路由组件出口 */}
           <About></About>
           <button onClick={() => navigate('/login?username=li')}>编程式导航 查询字符串</button>
           <button onClick={() => navigate('/login/1001')}>编程式导航 restful路由</button>
        </>
    )
}