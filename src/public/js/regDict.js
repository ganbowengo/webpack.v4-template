/*
 * @Descripttion:
 * @Author: ganbowen
 * @Date: 2020-04-24 15:34:05
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-07-27 15:51:13
 */
const validate = {
    cjhm: {
        reg: /^[0-9a-z*A-Z]*$/,
        msg: '车架号码不能录入数字、字母及星号以外的字符！'
    }
}

export default validate
