/*
 * @Descripttion:
 * @Author: ganbowen
 * @Date: 2020-04-01 16:01:42
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-06-29 10:09:31
 */
const importAsync = path => () => import('@/module' + path + '.vue')

export function initRoutes (json = [], router, url = '') {
    return json.forEach((item) => {
        if (item.children && item.children.length) {
            initRoutes(item.children, url + '/' + item.path)
        } else {
            router.push(
                {
                    path: '/' + item.path,
                    name: item.path,
                    component: importAsync(url + '/' + item.path + '/index')
                }
            )
        }
    })
}
