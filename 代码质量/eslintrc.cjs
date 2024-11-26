// 主要是校验错误 现在最新的vue3已经不用这个格式的 已经变成了eslint.config.js
// .eslintrc.cjs    

/* eslint-env node */
module.exports = {
    root: true,
    'extends': [
      'plugin:vue/vue3-essential',
      'eslint:recommended'
    ],
    parserOptions: {
      ecmaVersion: 'latest'
    },
    rules: {
        'prettier/prettier': [
            'warn',
            {
                singleQuote: true,  //单引号
                semi: false, // 无分号
                printWidth: 80, //每行宽度最多80字符
                trailingComma: 'none', // 不加对象/数组最后的逗号
                endOfline: 'auto' //换行符号不限制
            }
        ],
        // ESLint规范
        'vue/multi-word-component-names': [
            'warn',
            {
                ignores: ['index'] //vue组件名称多单词组成，忽略index.vue
            }
        ],
        'vue/no-setup-props-destructure': ['off'], //关闭props解构校验
        'no-undef': 'error'  // 未定义变量报错
    } 
    
    
  }
  