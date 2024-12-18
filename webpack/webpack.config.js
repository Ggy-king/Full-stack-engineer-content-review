const path = require('path')

// 分离css文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: "development",  // 设置成开发模式

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
            // {
            //     // test很重要 匹配哪些文件
            //     test: /\.css$/,
            //     use: ["style-loader", "css-loader"]  // 用哪些包处理这些文件
            // },
            {
                // test很重要 匹配哪些文件
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader   // 使用插件进行css转义
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"  // 使用静态资源 js模块默认支持
            },

        ]

    },

    plugins: [  // 插件的意思
        new MiniCssExtractPlugin({   // new一个实例插件
            filename: 'main.css'   // 生成的文件名
        })

    ],

    devServer: {  // 配置服务器
        static: path.join(__dirname, "dist"),  // 服务器打开目录
        compress: true,  // 打包过程是否需要压缩
        port: 9000,
        hot: true,  // 热更新
        open: true  // 自动打开浏览器

    }

}