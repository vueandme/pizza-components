<template>
  <div class="container">
    <IngredientDropdown tag="ul" :list="list" />
    <IngredientList tag="ul" :list="list" />
  </div>
</template>

<script>
import IngredientDropdown from '@/components/IngredientDropdown'
import IngredientList from '@/components/IngredientList'
import { ingredientData } from '@/api/data'

export default {
  components: {
    IngredientDropdown,
    IngredientList
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
<style></style>
