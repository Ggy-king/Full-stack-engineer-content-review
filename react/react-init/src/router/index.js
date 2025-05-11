import About from "../page/About"
import Login from "../page/Login"

import { createBrowserRouter, createHashRouter } from 'react-router-dom'

const router = createBrowserRouter([
// const router = createHashRouter([
    {
        path: '/login',
        element: <Login />,
        children: [
            {
                path: 'about',

                // 如果想默认就显二级路由 则去掉path配置 添加index属性 记得在组件中写路径时设为/
                // index: true,
                element: <About />
            }
        ]
    },
    {
        path: '/test/:id',
        // path: '*', 通配
        element: <Login />
    }
])

export default router
