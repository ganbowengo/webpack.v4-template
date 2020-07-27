/*
 * @Descripttion:
 * @Author: ganbowen
 * @Date: 2020-03-26 09:54:07
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-07-27 15:59:30
 */
import request from './request'
const API = (function () {
    return {
        // 登录
        login (options = { params: '' }) {
            return request(options, 'login')
        }
    }
})()

export default API
