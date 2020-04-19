import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use (Vuex)

export default new Vuex.Store({
    state,
    mutations
    //state: {
        //city : defaultCity
        //city :localStorage.city || '成都'
    //},
    // actions: {
    //     cityChange (ctx , city){
    //         ctx.commit('endChange', city)
    //     }
    // },
    // mutations: {
    //     endChange (state, city){
    //         state.city = city           
    //         try{
    //             localStorage.city = city
    //         } catch (e) {}
    //     }
    // }
    // const state = {
    //     user: window.sessionStorage.getItem('user')
    //   }
    //   const mutations = {
    //     getUser: (state, data) => {
    //       // 把用户名存起来
    //       state.user = data
    //       window.sessionStorage.setItem('user', data)
    //     },
    //     loginOut: (state) => {
    //       // 登出的时候要清除用户名
    //       state.user = null
    //       window.sessionStorage.removeItem('user')
    //     }
    //   }
})