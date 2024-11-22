// 注意这个插件用法是在vant官网上找的 叫浏览器适配 做vue的时候


// 1 后续用的vw一些单位写的时候很麻烦，所以我们可以用插件，我们写项目的时候用px写，到编译的时候插件自动按标准屏转化成vw
// 2 post-px-to-viewport

// 安装
// post-px-to-viewport@1.1.1

// 在postcss.config.js文件中配置
module.exports = {
    plugin: {
        'postcss-px-to-viewport': {
            // 标准屏宽度
            viewportWidth: 375
        }
    }
}