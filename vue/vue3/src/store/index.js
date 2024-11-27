// pinia独立维护

import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate' 

const pinia = createPinia()  // 创建
pinia.use(persist)   // 挂载到pinia上

export default pinia


// 做统一导出 这样的话以后别处引用只需要引一个路径即可
export * from './modules/user'
export * from './modules/token'