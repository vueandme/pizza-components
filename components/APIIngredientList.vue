<template>
  <div class="IngredientList">
    <span v-if="loading">
      LOADING!
    </span>
    <div v-else>
      <IngredientItem
        v-for="item in sorted"
        :key="item.id"
        v-bind="item"
      ></IngredientItem>
    </div>
  </div>
</template>

<script>
import loadList from '@/composable/ingriedientFetch'
import IngredientItem from '@/components/IngredientItem'

export default {
  components: {
    IngredientItem
  },
  setup() {
    const { sorted, loading, fetch } = loadList()
    fetch()
    return { sorted, loading }
  }
}
</script>

<style></style>
