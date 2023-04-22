<template>
  <div class="home col">
    <div class="d-sm-flex align-items-center">
      <h1 class="flex-grow-1">
        Ваши расходы
        <AddExpense />
      </h1>
      <Filter />
    </div>
    <ExpensesList class="mt-2"/>
  </div>
</template>

<script>
import ExpensesList from '@/components/ExpensesList.vue'
import AddExpense from '@/components/AddExpense.vue'
import Filter from '@/components/Filter.vue'

export default {
  name: 'HomeView',
  components: {
    ExpensesList,
    AddExpense,
    Filter
  }
}
</script>
