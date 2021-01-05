/*
 * @Descripttion: git commit 提交信息分类
 * @Author: ganbowen
 * @Date: 2021-01-05 09:35:14
 * @LastEditors: ganbowen
 * @LastEditTime: 2021-01-05 16:47:52
 */
// feat ：新功能
// fix ：修复 bug
// chore ：对构建或者辅助工具的更改
// refactor ：既不是修复 bug 也不是添加新功能的代码更改
// style ：不影响代码含义的更改 (例如空格、格式化、少了分号)
// docs ：只是文档的更改
// perf ：提高性能的代码更改
// revert ：撤回提交
// test ：添加或修正测试
// merge ：merge代码、解决冲突
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', [
            'chore',
            'docs',
            'feat',
            'fix',
            'perf',
            'refactor',
            'revert',
            'style',
            'test',
            'merge',
            'config'
        ]]
    }
}
