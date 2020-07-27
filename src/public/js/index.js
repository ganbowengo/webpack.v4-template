/*
 * @Descripttion:
 * @Author: ganbowen
 * @Date: 2020-03-26 09:53:36
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-07-27 15:59:58
 */
import api from './request/api'
import dictionary from './dictionary'

window.request = api
window.dict = dictionary
window.ifremBaseUrl = process.env.NODE_ENV === 'development' ? 'public/' : '../../'