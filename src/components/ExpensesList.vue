<template>
  <div v-if="!list.length">Нет расходов</div>
  <div v-else v-for="(expenseItem, i) in list" :key="i">
    {{ getCategoryById(expenseItem.category).name }}
    :
    {{ expenseItem.amount }}
    {{ expenseItem.date.toLocaleString() }}
    <button type="button" class="btn btn-danger" @click="deleteByIndex(i)">
      <i class="fa-solid fa-trash"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ExpensesList',
  computed: {
    list () {
      const expenses = this.$store.state.expenses
      return [...expenses].sort((a, b) => b.date - a.date)
    },
    categories () {
      return this.$store.state.categories
    }
  },
  methods: {
    getCategoryById (categoryId) {
      return this.categories.find(category => category.id === categoryId)
    },
    deleteByIndex (i) {
      this.$store.dispatch('removeExpense', i)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
