/*
 * @Descripttion:
 * @Author: ganbowen
 * @Date: 2021-01-05 17:11:31
 * @LastEditors: ganbowen
 * @LastEditTime: 2021-01-05 18:04:42
 */

// 自己封装方法
// import { createTest, createVue, destroyVM } from '../utils'
//https://vue-test-utils.vuejs.org/zh/guides/
import { mount } from '@vue/test-utils'
import Label from '@/common/label.vue'

describe('Label', () => {
    let vm
    it('label', () => {
        vm = mount(Label, {
            propsData: {
                label: '姓名'
            }
        })
        expect(vm.html()).toContain(` <div class="label-temp-text">姓名</div>`)
    })
})
