<template>
  <label class="me-2">Фильтр по категориям:</label>
  <select class="form-select form-select-sm" aria-label="Фильтр по категориям">
    <option selected>Не фильтровать</option>
    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
  </select>
</template>

<script>
export default {
  computed: {
    categories () {
      return this.$store.state.categories
    }
  }
}
</script>

<style>
  .form-select {
    width: initial;
  }
</style>
