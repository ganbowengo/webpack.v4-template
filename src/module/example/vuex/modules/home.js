/*
 * @Descripttion:
 * @Author: ganbowen
 * @Date: 2020-07-27 15:44:21
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-07-27 15:45:06
 */
const state = {
    data: {}
}

const mutations = {
    data () { },
    changeState: (state, options) => {
        if (options.props) {
            state[options.type][options.props] = options.data
        } else {
            state[options.type] = options.data
        }
        if (options.isCache) window.sessionStorage.setItem(options.type, JSON.stringify(state[options.type]))
    }
}

const actions = {
    data: ({
        commit
    }) => commit('data')
}

const getters = (function (state) {
    let obj = {}
    for (let key in state) {
        obj[key] = state => state[key]
    }
    return obj
})(state)

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
