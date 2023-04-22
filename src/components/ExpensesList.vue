<template>
  <div v-if="!list.length">Нет расходов</div>
  <table v-else class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Категория</th>
        <th scope="col">Сумма</th>
        <th scope="col">Дата</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(expenseItem, i) in list" :key="i">
        <td>{{ list.length - i }}</td>
        <td>{{ getCategoryById(expenseItem.category).name }}</td>
        <td>{{ expenseItem.amount }} &#8381;</td>
        <td>{{ expenseItem.date.toLocaleString() }}</td>
        <td>
          <button type="button" class="btn btn-danger" @click="deleteByIndex(i)">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
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
