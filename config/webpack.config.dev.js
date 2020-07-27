/*
 * @Descripttion:
 * @Author: ganbowen
 * @Date: 2020-03-25 09:38:48
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-05-25 11:22:13
 */

'use strict'
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const conf = require('./utils')
const LOCAL_IP = conf.getIPAddress();

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        host: LOCAL_IP || '0.0.0.0',
        port: '3000',
        open: true,
        compress: true,
        clientLogLevel: 'warning',
        inline: true,
        hot: true,
        openPage: 'billing.html',
        disableHostCheck: true
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [require('autoprefixer')]
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
    }
})
