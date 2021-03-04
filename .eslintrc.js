/*
 * @Author       : ganbowen
 * @Date         : 2020-07-27 15:40:39
 * @LastEditors  : ganbowen
 * @LastEditTime : 2021-03-04 10:31:30
 * @Descripttion :
 */
module.exports = {
    root: true,
    env: {
        node: true,
        browser: true
    },
    extends: [
        'plugin:vue/recommended', // vue template formatter
        'standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'space-before-function-paren': ['error', 'always'], // 括号之前有空格
        quotes: ['error', 'single'], // 使用单引号
        indent: ['error', 4], // js tab size (包含 .vue 的 script)
        'vue/html-indent': ['error', 4], // template 格式化 tab size
        'vue/script-indent': ['error', 4] // script 格式化 tab size
    },
    globals: {
        "$": true,
        "dict": true,
        "request": true,
        "_isCancelKeydown": true,
        "log": true
    }
}
