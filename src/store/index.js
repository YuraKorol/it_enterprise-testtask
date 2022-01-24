import Vue from 'vue'
import Vuex from 'vuex'

import orders from '@/store/orders'
import products from '@/store/products'
import statuses from '@/store/statuses'
import modal from '@/store/modal'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    orders,
    products,
    statuses,
    modal
  }
})
