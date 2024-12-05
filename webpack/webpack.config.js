const path = require('path')

module.exports = {
    // 入口  程序从哪个文件开始执行
    entry: "./src/index.js",
    // 出口
    output: {
        // 导出后的文件叫什么名字
        filename: "bundle.js",
        // 在哪个文件夹下
        path: path.resolve(__dirname, "./dist")  // resolve 合并
    },

    module: {  // 模块的意思
        rules: [  // 规则 在这里可以配置你需要的处理方案 es6 css vue react
            {
                // test很重要 匹配哪些文件
                test: /\.css$/,
                use: ["style-loader", "css-loader"]  // 用哪些包处理这些文件
            }

        ]

    }

}