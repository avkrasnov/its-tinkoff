import { createStore } from 'vuex'

export default createStore({
  state: {
    expenses: [],
    categories: [
      { id: 'food', name: 'Продукты питания' },
      { id: 'home', name: 'Дом, ремонт' },
      { id: 'cash', name: 'Наличные' },
      { id: 'others', name: 'Другое' }
    ]
  },
  getters: {
  },
  mutations: {
    newExpense (state, payload) {
      state.expenses.push(payload)
    }
  },
  actions: {
    addExpense ({ commit, state }, payload) {
      commit('newExpense', payload)
    }
  },
  modules: {
  }
})
