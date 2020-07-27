/*
 * @Descripttion: 数据操作
 * @Author: ganbowen
 * @Date: 2020-04-28 11:29:41
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-06-30 10:20:35
 */
import {
    typeOf
} from './type'

// 深拷贝
export function deepCopy (data) {
    const t = typeOf(data)
    let o
    if (t === 'array') {
        o = []
    } else if (t === 'object') {
        o = {}
    } else {
        return data
    }
    if (t === 'array') {
        for (let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]))
        }
    } else if (t === 'object') {
        for (let i in data) {
            o[i] = deepCopy(data[i])
        }
    }
    return o
}

// 按字节数截取
export function setTextByByteLength (data, length) {
    if (!length) return data
    let n = 0
    let string = ''
    for (let i = 0; i < data.length; ++i) {
        data.charCodeAt(i) >= 128 ? n += 2 : ++n
        if (n > length) break
        string += data.charAt(i)
    }
    return string
}

// 按字节数截取
export function getTextByteLength (str) {
    str += ''
    return str.replace(/[^\x00-\xff]/g, 'aa').length
}

// 输出URL中的参数
export function parseHref (data) {
    if (undefined == data) {
        var href = window.location.search || window.sessionStorage.getItem('hrefStr') || ''
    } else {
        var href = data;
    }
    if (href.indexOf("?") === -1) {
        return {}
    }
    if (href.indexOf('?') > -1) {
        href = href.substring(href.indexOf('?') + 1)
    }
    if (href.indexOf('#') > -1) { // 截取问号后的 #
        href = href.substring(0, href.indexOf('#'))
    }
    var params = href
    var paramArr = params.split("&");
    var paramStr = {}, tempvalue = "";
    for (var i = 0; i < paramArr.length; i++) {
        var tem = paramArr[i].split("=");
        if (tem[1] == "") {
            paramStr[tem[0]] = "";
        } else {
            tempvalue = tempvalue = unescape(tem[1]);
            if (tempvalue.indexOf("[") != -1 || tempvalue.indexOf("{") != -1) {
                paramStr[tem[0]] = eval("(" + tempvalue + ")");
            } else {
                paramStr[tem[0]] = tempvalue;
            }
        }
    }
    return paramStr;
}


export function parseParamToUrl (url, json) {
    // 去掉#后面多余的字符串
    if (url.indexOf('#') !== -1) {
        url = url.substring(0, url.indexOf('#'))
    }
    var res = ''
    for (var key in json) {
        if (typeof (json[key]) === 'string') {
            res += key + '=' + escape(json[key]) + '&'
        } else {
            res += key + '=' + escape(JSON.stringify(json[key])) + '&'
        }
    }
    // 判断url是否已经存在参数
    if (url.indexOf('?') !== -1) {
        return url + '&' + res.substring(0, res.length - 1)
    } else {
        return res === '' ? url : (url + '?' + res.substring(0, res.length - 1))
    }
}

// 将正数字符串转为负数字符串
export function positiveToNegative (data, num = '0.00') {
    return +data ? +data <= 0 ? data + '' : '-' + data : num
}

// 字节的长度
export function byteLen (str) {
    let len = 0
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 225) { len += 2 } else { len += 1 }
    }
    return len
}

export function filterSpecialCharInStr (str, reg) {
    return str.replace(reg, str)
}

/**
 * 提取对象中的属性并返回新对象
 * @param {Object} obj 提取的目标对象
 * @param {Array} keys 提取的目标属性数组
 */
export function filterObjectByKeys (obj, keys = []) {
    let res = {}
    keys.forEach(function (key) {
        if (key in obj) res[key] = obj[key]
    })
    return res
}
