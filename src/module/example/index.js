/*
 * @Descripttion: main
 * @Author: ganbowen
 * @Date: 2020-03-25 09:40:40
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-08-19 11:06:35
 */

import Vue from 'vue'
import App from './App.vue'
import store from './vuex'
import router from './router/index.js'
import { Input } from 'element-ui'
import vuescroll from 'vuescroll/dist/vuescroll-native'

// 全局
import '&/css/index.scss'
// 按需引入样式
import '&/js'
import initCommonUi from '@/common'

// 模块公共 css js
// ...

Vue.use(Input)
Vue.use(Option)
Vue.use(vuescroll)
Vue.prototype.$vuescrollConfig = {
    bar: {
        background: '#000'
    }
};

initCommonUi(Vue)
export default new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App)
})
