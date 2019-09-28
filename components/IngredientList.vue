<template>
  <div class="IngredientList">
    IngredientList: I am not yet implemented!
    <IngredientItem />
  </div>
</template>

<script>
import IngredientItem from '@/components/IngredientItem'
import { ingredientData } from '@/api/data'

export default {
  components: {
    IngredientItem
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
