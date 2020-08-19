/*
 * @Descripttion:
 * @Author: ganbowen
 * @Date: 2020-04-03 16:15:33
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-08-19 11:05:35
 */
import Vue from 'vue'
import { Message, Loading } from 'element-ui'
import { isObject, isString } from '../../utils/tools'

Vue.prototype.$Confirm = Message
Vue.prototype.$Loading = Loading
const VUE_UI_OBJ = new Vue()

function initParams (obj) {
    if (isObject(obj)) {
        return JSON.stringify(obj)
    } else if (isString(obj)) {
        return obj
    } else {
        return ''
    }
}

function proxyReq (options, reqJson) {
    let obj = reqJson && JSON.parse(reqJson)
    if (obj.returncode === '0') {
        // other
    } else if (!options.noMsg) {
        VUE_UI_OBJ.$Loading.hide()
        if (options.msgCb) {
            obj.returnmsg = options.msgCb(obj.returnmsg)
        }
        if (options.errLevel) {
            VUE_UI_OBJ.$Confirm[options.errLevel]({
                message: obj.returnmsg
            })
        } else {
            VUE_UI_OBJ.$Confirm.warning({
                message: obj.returnmsg
            })
        }
    }
    return obj
}

/**
 * 请求exe后台方法
 * @param {*} options 配置参数
 *      @param {Object|String} options.params  请求参数
 *      @param {String} options.errLevel  提示信息级别  默认 warning  可选值为 Confirm - type
 *      @param {Function} options.msgCb  提示信息处理 默认为空
 *      @param {Boolean} options.noMsg  不提示错误信息 默认为 false - 提示
 * @param {*} portName  接口业务Id
 */
export default function request (options, portName) {
    options.portName = portName // 调试用
    let JsonStr = initParams(options.params)
    let reqJson = ''
    try {
        reqJson = window.DataTransfer.ExecuteAssignment(JsonStr, portName)
    } catch (e) {
        // reqJson = window.parent.DataTransfer.ExecuteAssignment(JsonStr, portName)
    }
    return proxyReq(options, reqJson)
}
