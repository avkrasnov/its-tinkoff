<template>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addExpenseModal">
    + Добавить
  </button>

  <div class="modal fade" id="addExpenseModal" tabindex="-1" aria-labelledby="addExpenseModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addExpenseModalLabel">Добавить расход</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <template v-if="!selectedCategory">Категория</template>
              <template v-else>{{ selectedCategoryName }}</template>
            </button>
            <ul class="dropdown-menu">
              <li v-for="category in categories" :key="category.id">
                <a class="dropdown-item" href="#" @click="selectCategory(category)">{{ category.name }}</a>
              </li>
            </ul>
            <input type="text" class="form-control" v-model="amount" placeholder="Сумма" aria-label="Рублей">
            <span class="input-group-text">&#8381;</span>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
          <button type="button" class="btn btn-primary" @click="add">Добавить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedCategory: false,
      amount: ''
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    },
    selectedCategoryName () {
      return this.categories.find(category => category.id === this.selectedCategory.id)?.name || ''
    }
  },
  methods: {
    selectCategory (category) {
      this.selectedCategory = category
    },
    add () {
      const expense = {
        amount: this.amount,
        category: this.selectedCategory.id
      }
      this.$store.dispatch('addExpense', expense)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
