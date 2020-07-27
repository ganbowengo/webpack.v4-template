/*
 * @Descripttion:
 * @Author: ganbowen
 * @Date: 2020-03-25 10:06:43
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-04-09 16:01:47
 */
const path = require('path')

module.exports = {
    resolve: (url) => path.resolve(__dirname, '..', url),
    join: (url) => path.join(__dirname, url),
    getIPAddress: () => {
        let interfaces = require('os').networkInterfaces();
        for (let devName in interfaces) {
            let iface = interfaces[devName];
            for (let i = 0; i < iface.length; i++) {
                let alias = iface[i];
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    return alias.address;
                }
            }
        }
    }
}
