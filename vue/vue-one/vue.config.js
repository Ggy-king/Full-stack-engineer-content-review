const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // publicPath: './',   默认是publicPath: '/'  改成./的目的就是为了改成相对路径就可以直接运行了
  transpileDependencies: true
})
