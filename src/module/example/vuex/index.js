/*
 * @Descripttion: vuex main
 * @Author: ganbowen
 * @Date: 2020-07-27 15:45:32
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-07-27 15:45:41
 */
import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home
    }
})
