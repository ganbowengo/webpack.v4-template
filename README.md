<!--
 * @Descripttion:
 * @Author: ganbowen
 * @Date: 2020-03-26 18:39:34
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-07-27 16:14:40
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
```

```bash
# Project architecture
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