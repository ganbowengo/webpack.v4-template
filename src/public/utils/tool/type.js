/*
 * @Descripttion: type vali
 * @Author: ganbowen
 * @Date: 2020-04-28 11:07:45
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-04-28 11:32:20
 */

export function isObject(obj) {
    return typeOf(obj) === 'object'
}

export function isString(obj) {
    return typeOf(obj) === 'string'
}

export function typeOf(obj) {
    const toString = Object.prototype.toString
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    }
    return map[toString.call(obj)]
}

// 判断参数是否是其中之一
export function oneOf(value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true
        }
    }
    return false
}
