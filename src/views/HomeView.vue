<template>
  <div class="home col">
    <h1>
      Ваши расходы
      <AddExpense />
    </h1>
    <ExpensesList />
  </div>
</template>

<script>
import ExpensesList from '@/components/ExpensesList.vue'
import AddExpense from '@/components/AddExpense.vue'

export default {
  name: 'HomeView',
  components: {
    ExpensesList,
    AddExpense
  }
}
</script>
