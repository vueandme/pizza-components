<template>
  <div class="container">
    <div class="block">
      <h1>Dropdown</h1>
      <IngredientDropdown :ingredients="list" />
    </div>
    <div class="block">
      <h1>List</h1>
      <IngredientList />
    </div>
  </div>
</template>

<script>
import IngredientList from '@/components/IngredientList'
import IngredientDropdown from '@/components/IngredientDropdown'
import { ingredientData } from '@/api/data'

export default {
  components: {
    IngredientList,
    IngredientDropdown
  },
  data() {
    return {
      list: []
    }
  },
  async mounted() {
    this.list = await ingredientData()
  }
}
</script>
<style scoped>
h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}
.block {
  margin-top: 32px;
}
</style>
