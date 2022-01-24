import { findAll } from '@/services/request.service'
import Api from '@/utils/api.config.js'

export default {
  namespaced: true,
  state: {
    products: [
      // {
      //   id: 1,
      //   name: 'Samsung',
      //   price: 1200,
      //   photoUrl:
      //     'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg'
      // },
      // {
      //   id: 2,
      //   name: 'Xiaomi',
      //   price: 5200,
      //   photoUrl:
      //     'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg'
      // },
      // {
      //   id: 3,
      //   name: 'iPhone 13 Pro',
      //   price: 15200,
      //   photoUrl:
      //     'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg'
      // }
    ]
  },
  mutations: {
    GET_ALL_PRODUCTS(state, payload) {
      console.log(payload)
      state.products = payload
    }
  },
  actions: {
    async GET_ALL_PRODUCTS({ commit }) {
      const data = await findAll(Api.GET_PRODUCTS)
      commit('GET_ALL_PRODUCTS', data.data)
    }
  },
  getters: {
    products: state => state.products
  }
}
