/*
 * @Descripttion: 日期工具
 * @Author: ganbowen
 * @Date: 2020-04-28 11:08:48
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-06-08 14:44:51
 */

// format Date
export function dateFormat (date, format = 'yyyy-MM-dd hh:mm:ss') {
    /* eslint no-useless-escape: 0 */
    const year = '([0-9]{4})[-/年]?'
    const month = '([0-9]{2})[-/月]?'
    const day = '([0-9]{2})[\s日]?'
    const time = '(([0-9]{2})[:]?([0-9]{2})[:]?([0-9]{2}))?'
    const reg = new RegExp(`^${year}${month}${day}${time}$`)
    const formatReg = /^[y]{4}(\S*)[M]{2}(\S*)[d]{2}(\S*)/
    if (!date) return
    let dateArr = date.match(reg)
    let splitTag = format.match(formatReg)
    date = `${dateArr[1]}${splitTag[1]}${dateArr[2]}${splitTag[2]}${dateArr[3]}${splitTag[3] || ''}`
    let timeStr = '00:00:00'
    if (format.indexOf('hh:mm:ss') > -1) {
        date += ` ${dateArr[4] || timeStr}`
    }
    return date
}
