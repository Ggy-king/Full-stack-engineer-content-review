// 构建工具
/**
 * Grunt 灵活 集成度不高
 * Gulp 灵活 但是集成度也不高
 * Fix3 百度的 现在也不用了
 * Webpack 主流
 * Vite 还需要发展
 */

// 1 安装webpack到项目
/**
 * 初始化项目 npm init 
 * 执行命令 npm i -D webpack    npm i -D webpack-cli
 */



// 2 使用webpack
/**
 * 创建项目结构 src(源码) dist(出口文件) public(主入口文件) webpack.config.js(配置文件)
 */




// 01 开发环境  npm i -D less // npm i --save-dev less 
// -D就是开发环境 所有上线不用的包都下载到这里   devDependencies

// 02 生产环境  npm i -S less  // npm i --save less
// 上线需要用的包  dependencies

// 03 loader   npm i -D style-loader css-loader
// 打包css文件需要用到loader