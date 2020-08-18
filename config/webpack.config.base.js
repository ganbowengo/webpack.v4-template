/*
 * @Descripttion:
 * @Author: ganbowen
 * @Date: 2020-03-25 09:38:34
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-08-18 16:04:45
 */
const conf = require('./utils')
const fs = require('fs')
const os = require('os')
const resolve = conf.resolve
const webpack = require('webpack')
const HappyPack = require('happypack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // css分离打包处理
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length }) // 获取cpu数量

let entrys, html, creatHappypack, cssLoader
{
    let files = fs.readdirSync(resolve('src/module'))

    // 设置所有的入口
    entrys = () => {
        let map = {}
        files.forEach(filename => {
            map[filename] = ['@babel/polyfill', conf.join(`../src/module/${filename}/index.js`)]
        })
        // 动态添加 map.file = 'url'
        // map.file 加入到出口的chunks数组中
        return map
    }

    // 设置出口的HTML
    html = files.map(filename => {
        return new HtmlWebpackPlugin({
            title: `--${filename.toUpperCase()}--`,
            template: 'index.html',
            filename: `${filename}.html`,
            chunks: ['common', 'manifest', 'vendor', filename],
            chunksSortMode: "manual" // 保持chunks加载顺序
        })
    })

    // 生成happypack plugin
    creatHappypack = (id, loaders) => new HappyPack({
        id,
        loaders,
        threadPool: happyThreadPool
    })

    cssLoader = new MiniCssExtractPlugin({
        use: [
            'happypack/loader?id=css'
        ]
    })
}

module.exports = {
    entry: entrys,
    output: {
        path: resolve('dist'),
        filename: 'static/js/[name]-[hash:8].js',
        chunkFilename: 'static/js/[name]-[hash:8].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            '&': resolve('src/public'),
            '@public': resolve('public')
        }
    },
    module: {
        rules: [
            {
                test: /\.(vue|js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                include: [resolve('src')],
                enforce: 'pre',
                options: {
                    formatter: require('eslint-friendly-formatter'),
                    emitWarning: true
                }
            },
            {
                test: /\.js$/,
                loader: 'happypack/loader?id=js',
                include: [resolve('src')]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    js: 'happypack/loader?id=vue',
                    css: cssLoader
                }
            },
            {
                test: /\.css$/,
                use: 'Happypack/loader?id=css'
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            outputPath: 'static/images',
                            limit: 10240, // 10K
                            esModule: false,
                            name: '[name]_[hash:6].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        ...html,
        new VueLoaderPlugin(),
        // new HappyPack({
        //     id: 'js',
        //     loaders: ['babel-loader?cacheDirectory=true'],
        //     threadPool: happyThreadPool
        // }),
        creatHappypack('js', ['babel-loader?cacheDirectory=true']),
        creatHappypack('vue', ['babel-loader?cacheDirectory=true']),
        creatHappypack('css', ['vue-style-loader', 'css-loader']),
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ]
}
