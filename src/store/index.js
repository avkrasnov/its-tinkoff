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
      payload.category = payload.category || 'others'
      payload.amount = payload.amount || 0
      payload.date = payload.date || new Date()
      state.expenses.push(payload)
    },
    deleteExpense (state, index) {
      state.expenses.splice(index, 1)
    }
  },
  actions: {
    addExpense ({ commit }, payload) {
      commit('newExpense', payload)
    },
    removeExpense ({ commit }, index) {
      commit('deleteExpense', index)
    }
  },
  modules: {
  }
})
