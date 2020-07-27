/*
 * @Descripttion:
 * @Author: ganbowen
 * @Date: 2020-03-25 09:40:40
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-07-27 15:46:26
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
import '&/css/billing.scss'
import '&/js'
import initCommonUi from '@/common'

// 模块公共
import './common/css/invoice.scss'

Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Checkbox)
Vue.use(Dialog)
Vue.use(Autocomplete)
Vue.use(vuescroll)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Progress)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
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
