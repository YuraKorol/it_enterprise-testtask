import orders from '@/store/orders'
import { findAll } from '@/services/request.service'
import Api from '@/utils/api.config.js'

export default {
  namespaced: true,
  state: {
    statuses: [
      // {
      //   id: 1,
      //   name: 'Обработка'
      // },
      // {
      //   id: 2,
      //   name: 'Доставлено'
      // },
      // {
      //   id: 3,
      //   name: 'В пути'
      // },
      // {
      //   id: 4,
      //   name: 'Подтверждено'
      // }
    ]
  },
  mutations: {
    GET_ALL_STATUSES(state, payload) {
      console.log(payload)
      state.statuses = payload
    }
  },
  actions: {
    async GET_ALL_STATUSES({ commit }) {
      const data = await findAll(Api.GET_STATUSES)
      commit('GET_ALL_STATUSES', data.data)
    }
  },
  getters: {
    statuses: state => state.statuses
  },
  modules: {
    orders
  }
}
