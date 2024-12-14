// 手动搭建react包

// 再原有基础之上 新加
1
/**
 *  npm i -D @babel/preset-react
    npm i -S react
    npm i -S react-dom  
 */

2
//  配置文件中书写
{
    text: /\.(js|jsx)$/,  // 主要为了解决jsx问题
    exclude: /node_modules/,
    loader: 'babel-loader'
}

3 
// 修改.babelrc文件

{
    "presets": [
        [], // es6语法配置  自己去拷
        "@babel/preset-react" // react配置
    ]
}

// 可以写react代码了
