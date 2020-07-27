/*
 * @Descripttion:
 * @Author: ganbowen
 * @Date: 2020-04-24 14:55:26
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-07-27 15:58:13
 */
import Vue from 'vue'
import { Confirm } from 'element-ui'
import validate from './regDict'
Vue.prototype.$Confirm = Confirm
const VUE_UI_OBJ = new Vue()

/**
 * 非空校验
 * @param {Object} data 校验的数据
 * @param {Object} props 与data key相同字段名称 代表需要校验的参数
 * @param {Object} options  配置的属性
 *        options.message 自定义对应字段提示信息 同props里面校验的参数的key对应
 */
export function notNull (data = {}, props = {}, options = {}) {
    removeSpace(data)
    let item = null
    let selfMessage = options.message || {} // 自定义信息
    let selfReg = options.reg || {}
    let selfcb = options.cb || {}
    for (let key in props) {
        item = data[key]
        if (selfReg[key]) {
            if (!selfReg[key](item)) {
                VUE_UI_OBJ.$Confirm.warning({
                    message: selfMessage[key] || (props[key] + '不能为空！'),
                    onOk: () => {
                        selfcb[key] && selfcb[key]()
                    }
                })
                return false
            }
        } else {
            if (!item && item !== 0) { // 数字  0 不为空
                VUE_UI_OBJ.$Confirm.warning({
                    message: selfMessage[key] || (props[key] + '不能为空！'),
                    onOk: () => {
                        selfcb[key] && selfcb[key]()
                    }
                })
                return false
            }
        }
    }
    return true
}

/**
 * 正则校验
 * @param {Object} params 校验的数据
 * @param {Object} validate 正则表
 */
export function paramsCheck (params) {
    removeSpace(params)
    for (let key in params) {
        if (validate[key]) {
            if (!secondCheck(params[key], validate[key].reg, validate[key].msg)) return false
        }
    }
    return true
}
function secondCheck (parma, reg, errorMessage) {
    if (!reg.test(parma)) {
        VUE_UI_OBJ.$Confirm.warning({
            message: errorMessage
        })
        return false
    }
    return true
}

// 去掉前后空格
export function removeSpace (params) {
    for (let i in params) {
        if (params[i] && typeof params[i] === 'string') {
            params[i] = params[i].replace(/(^\s*)|(\s*$)/g, '')
        }
    }
}

// 获取字符串的字节数
export function getStrLength (str) {
    if (!(str + '')) {
        return 0;
    }
    return str.replace(/[\u0391-\uFFE5]/g, 'aa').length;
}
