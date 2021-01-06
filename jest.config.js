/*
 * @Descripttion: jest 配置文件
 * @Author: ganbowen
 * @Date: 2021-01-05 17:02:53
 * @LastEditors: ganbowen
 * @LastEditTime: 2021-01-06 13:51:09
 */

module.exports = {
    // 包含的测试文件后缀
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'vue',
        'html'
    ],
    // 匹配webpack alias
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^&/(.*)$': '<rootDir>/src/public/$1',
        '^@public/(.*)$': '<rootDir>/public/$1'
    },
    // 匹配对应的测试babel处理
    transform: {
        // 用 `vue-jest` 处理 `*.vue` 文件
        '.*\\.(vue)$': 'vue-jest',
        '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest'
    },
    // 需要执行的测试用例
    testMatch: [
        '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
    ],
    // 开启覆盖率收集
    collectCoverage: true,
    // 开启覆盖率收集
    collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**'],
    // 覆盖率文件存储地址
    coverageDirectory: '<rootDir>/coverageDirectory',
    // 挂载一个组件时，可以访问到HTML根元素
    snapshotSerializers: ['jest-serializer-vue']
}
