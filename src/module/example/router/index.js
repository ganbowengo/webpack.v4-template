/*
 * @Descripttion:
 * @Author: ganbowen
 * @Date: 2020-03-26 11:06:04
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-07-27 15:43:45
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { initRoutes } from '&/utils'
import menu from './menu'

Vue.use(VueRouter)

const routes = [
    {
        path: '/', // 默认主页
        name: '',
        redirect: 'home'
    }
]
initRoutes(menu, routes, '/example/components')

const router = new VueRouter({
    // mode: 'history',
    base: __dirname,
    routes
})

router.beforeEach((to, from, next) => {
    // ...
    next()
})

export default router
