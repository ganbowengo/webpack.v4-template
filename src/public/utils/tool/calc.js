/*
 * @Descripttion: 计算重写
 * @Author: ganbowen
 * @Date: 2020-05-08 11:08:42
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-05-08 13:44:33
 */
// 除法函数
export function accDiv(arg1, arg2) {
    let t1 = 0
    let t2 = 0
    let r1, r2
    try {
        t1 = arg1.toString().split('.')[1].length
    } catch (e) { }
    try {
        t2 = arg2.toString().split('.')[1].length
    } catch (e) { }
    r1 = Number(arg1.toString().replace('.', ''))
    r2 = Number(arg2.toString().replace('.', ''))
    return (r1 / r2) * Math.pow(10, t2 - t1)
}

// 乘法函数
export function accMul(arg1, arg2) {
    let m = 0
    let s1 = arg1.toString()
    let s2 = arg2.toString()
    try {
        m += s1.split('.')[1].length
    } catch (e) { }
    try {
        m += s2.split('.')[1].length
    } catch (e) { }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
}

// 加法函数
export function accAdd(arg1, arg2) {
    let r1, r2, m
    try {
        r1 = arg1.toString().split('.')[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split('.')[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
}

// 减法函数
export function accSub(arg1, arg2) {
    let r1, r2, m, n
    try {
        r1 = arg1.toString().split('.')[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split('.')[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    // 动态控制精度长度
    n = (r1 >= r2) ? r1 : r2
    return ((arg2 * m - arg1 * m) / m).toFixed(n)
}
