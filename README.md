<!--
 * @Descripttion:
 * @Author: ganbowen
 * @Date: 2020-03-26 18:39:34
 * @LastEditors  : ganbowen
 * @LastEditTime : 2021-03-04 10:25:32
 -->

## Build Setup

```bash
# 下载依赖
npm install

# 运行
npm run dev

# 打包
npm run build

# eslint检测代码规范
npm run lint

# 自动检测并修复代码格式
npm run lint-fix

# 自动化测试
npm run test

# 使用
    1. 拉取项目结构之后，使用 npm/cnpm i 下载项目依赖
    2. 使用npm run dev/npm run build 命令行进行开发和打包
    3. git add/git commit -m 'message' 提交

# Explain
    1. 使用vue、element-ui、sass等
    2. 此项目是基于webpack4打包，npm为包管理工具，node版本v8.16.2
    3. 可扩展多入口打包
    4. 分层抽离公共js、css及其他业务组件
    5. 使用Eslint检查代码 并使用gitHooks强制检查代码规范
    6. 支持jest自动化测试
```

```bash
# Project architecture
-- .vscode                         # vscode格式化及eslint相关配置文件
    -- extensions.json             # 项目级配置相关插件
    -- settings.json               # 项目级vscode配置
-- config                          # 项目配置文件
    -- webpack.config.dev          # 开发webpack配置
    -- webpack.config.pro          # 生产webpack配置
    -- webpack.config.base         # 公共webpack配置
-- public                          # 项目公共静态资源
-- src
    -- common                      # 基础组件库 跨模块使用
    -- module                      # 模块分类
        -- example                 # 全局公用样式目录
            -- common              # 模块使用 公共资源js、css等
            -- components          # 模块对应子功能页面
            -- router              # 模块路由
            -- index               # 模块入口文件
    -- public                      # 全局资源目录
        -- css                     # 全局公用样式目录
        -- image                   # 全局image管理目录
        -- js                      # 全局API公用资源目录
        -- utils                   # 全局工具类函数、js类库资源目录
-- index.html                      # 项目HTML模板文件
```


##### 配置ESlint\stylelint
```bash
# 安装下列插件
npm install --save-dev eslint babel-eslint eslint-loader eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-vue eslint-friendly-formatter eslint-config-standard

# 配置.eslintrc.js、.stylelintrc.js
# 配置项目编译时使用eslint-loader\eslint-friendly-formatter将eslint的错误信息出现在终端
# 配置.vscode 下的extensions、settings 根据vscode提示安装扩展插件

```

##### 配置Jest
[vue 配置Jest官方文档](https://vue-test-utils.vuejs.org/zh/installation/)
```bash
# 安装jest @vue/test-utils vue-jest
npm install --save-dev jest @vue/test-utils vue-jest

# 配置jest.config.js
# 配置.babelrc @babel/preset-env中的转义模块 jest运行在node环境 该配置将跳过不必要转义的模块 提升测试执行效率

```

##### 配置commitizen
[配置commitizen参考文档](https://segmentfault.com/a/1190000023388007)
```bash
# commitizen 支持commit提示
# cz-customizable 支持commit中文提示
# @commitlint/config-conventional @commitlint/cli 支持commit message校验
# husky 支持git hooks 触发git事件
npm install --save-dev commitizen cz-customizable @commitlint/config-conventional @commitlint/cli husky

# 项目内初始化 cz-customizable 适配器
npx commitizen init cz-customizable --save-dev --save-exact --force

# 额外配置文件 .cz-config.js commitlint.config.js
# git hooks 中添加 "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
# 设置无感知触发 git cz

```
