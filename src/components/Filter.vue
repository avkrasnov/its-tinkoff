<template>
  <label class="me-2">Фильтр по категориям:</label>
  <select @change="filter($event)" class="form-select form-select-sm" aria-label="Фильтр по категориям">
    <option value="" selected>Не фильтровать</option>
    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
  </select>
</template>

<script>
export default {
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  methods: {
    filter (event) {
      const category = event.target.value
      this.$store.commit('setFilter', category)
    }
  }
}
</script>

<style>
  .form-select {
    width: initial;
  }
</style>
