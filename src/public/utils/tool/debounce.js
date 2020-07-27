/*
 * @Descripttion:
 * @Author: ganbowen
 * @Date: 2020-06-23 11:14:04
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-06-23 11:14:50
 */
export function debounce (func, delay = 50) {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay)
    }
}
