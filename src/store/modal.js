export default {
  namespaced: true,
  state: {
    order: {},
    isOpen: false,
    isOpenCreateModal: false
  },
  mutations: {
    OPEN_MODAL_DELETE_ORDER(state, payload) {
      state.order = payload
      state.isOpen = true
    },
    CLOSE_MODAL_DELETE_ORDER(state) {
      state.isOpen = false
      state.order = {}
    },
    OPEN_MODAL_CREATE_ORDER(state) {
      state.isOpenCreateModal = true
    },
    CLOSE_MODAL_CREATE_ORDER(state) {
      state.isOpenCreateModal = false
    }
  },
  actions: {
    OPEN_MODAL_DELETE_ORDER({ commit }, payload) {
      commit('OPEN_MODAL_DELETE_ORDER', payload)
    },
    CLOSE_MODAL_DELETE_ORDER({ commit }) {
      commit('CLOSE_MODAL_DELETE_ORDER')
    },
    OPEN_MODAL_CREATE_ORDER({ commit }) {
      commit('OPEN_MODAL_CREATE_ORDER')
    },
    CLOSE_MODAL_CREATE_ORDER({ commit }) {
      commit('CLOSE_MODAL_CREATE_ORDER')
    }
  },
  getters: {
    order: state => state.order,
    isOpen: state => state.isOpen,
    isOpenCreateModal: state => state.isOpenCreateModal
  }
}
