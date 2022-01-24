import { findAll, remove, update, create } from '@/services/request.service'
import Api from '@/utils/api.config.js'

export default {
  namespaced: true,
  state: {
    orders: [
      // {
      //   id: 1,
      //   productId: 3,
      //   statusId: 2,
      //   count: 7
      // },
      // {
      //   id: 2,
      //   productId: 2,
      //   statusId: 1,
      //   count: 12
      // },
      // {
      //   id: 3,
      //   productId: 1,
      //   statusId: 3,
      //   count: 1
      // },
      // {
      //   id: 4,
      //   productId: 3,
      //   statusId: 2,
      //   count: 221
      // },
      // {
      //   id: 5,
      //   productId: 2,
      //   statusId: 2,
      //   count: 71
      // }
    ]
  },
  mutations: {
    GET_ALL_ORDERS(state, payload) {
      state.orders = payload
    },
    DELETE_ORDER(state, payload) {
      state.orders = state.orders.filter(e => e.id !== payload)
    },
    EDIT_ORDER(state, payload) {
      const index = state.orders.findIndex(e => e.id === payload.id)
      if (index > -1) {
        state.orders.splice(index, 1, payload)
      }
    },
    CREATE_ORDER(state, payload) {
      state.orders.push(payload)
    }
  },
  actions: {
    async GET_ALL_ORDERS({ commit }) {
      const data = await findAll(Api.GET_ORDERS)
      commit('GET_ALL_ORDERS', data.data)
    },
    async DELETE_ORDER({ commit }, payload) {
      await remove(Api.DELETE_ORDER(payload))
      commit('DELETE_ORDER', payload)
    },
    async EDIT_ORDER({ commit }, payload) {
      await update(Api.UPDATE_ORDER, payload)
      commit('EDIT_ORDER', payload)
    },
    async CREATE_ORDER({ commit }, payload) {
      console.log(payload)
      await create(Api.ADD_ORDER, payload)
      commit('CREATE_ORDER', payload)
    }
  },
  getters: {
    orders: state => state.orders
  }
}
