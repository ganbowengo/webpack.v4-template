/*
 * @Descripttion:
 * @Author: ganbowen
 * @Date: 2020-04-01 16:00:37
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-07-27 16:02:21
 */
import Vue from 'vue'
const isServer = Vue.prototype.$isServer
window._isCancelKeydown = false

/* istanbul ignore next */
export const on = (function () {
    if (!isServer && document.addEventListener) {
        return function (element, event, handler, useCapture = false) {
            if (element && event && handler) {
                element.addEventListener(event, handler, useCapture)
            }
        }
    } else {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.attachEvent('on' + event, handler)
            }
        }
    }
})()

/* istanbul ignore next */
export const off = (function () {
    if (!isServer && document.removeEventListener) {
        return function (element, event, handler, useCapture = false) {
            if (element && event) {
                element.removeEventListener(event, handler, useCapture)
            }
        }
    } else {
        return function (element, event, handler) {
            if (element && event) {
                element.detachEvent('on' + event, handler)
            }
        }
    }
})()

export const keydown = (function () {
    return function (vm, functionname, type) {
        document.onkeydown = function (e) {
            if (!window._isCancelKeydown) {
                vm[functionname](e, type)
            }
        }
    }
})()

export const unkeydown = (function () {
    return function () {
        document.onkeydown = null
    }
})()