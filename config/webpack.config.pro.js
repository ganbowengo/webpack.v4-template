/*
 * @Descripttion:
 * @Author: ganbowen
 * @Date: 2020-03-25 09:39:00
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-08-19 15:23:50
 */
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const TerserPlugin = require('terser-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // css分离打包处理
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin // 打包分析工具
module.exports = merge(baseConfig, {
    mode: 'production',
    // devtool: 'hidden-source-map',
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../../'
                    }
                },
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [require('autoprefixer'), require('cssnano')]
                    }
                },
                'sass-loader',
                {
                    loader: 'sass-resources-loader',
                    options: {
                        resources: path.resolve(__dirname, '../src/public/css/color.scss')
                    }
                }
            ]
        }]
    },
    plugins: [
        // 提取css
        new MiniCssExtractPlugin({
            filename: 'static/css/[name]-[hash:8].css',
            chunkFilename: 'static/css/[name]-[hash:8].chunk.css'
        }),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false // 是否自动打开分析页面
        })
    ],
    optimization: {
        minimizer: [
            // 清除打印代码
            new TerserPlugin({
                minify: (file, sourceMap) => {
                    // https://github.com/mishoo/UglifyJS2#minify-options
                    const uglifyJsOptions = {
                        drop_console: true, // console[log/error/info/dir/time...]
                        compress: {
                            pure_funcs: ['log']
                        }
                    };

                    if (sourceMap) {
                        uglifyJsOptions.sourceMap = {
                            content: sourceMap
                        };
                    }

                    return require('uglify-js').minify(file, uglifyJsOptions);
                }
            })
        ],
        minimize: true,
        splitChunks: {
            chunks: 'async',
            cacheGroups: {
                common: {
                    name: 'common',
                    minSize: 1,
                    chunks: 'all',
                    priority: 0,
                    minChunks: 2 // 使用含n个及以上的打包为一个文件
                },
                vendor: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    priority: 10,
                    minChunks: 2
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        }
    }
})
