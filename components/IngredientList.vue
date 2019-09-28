<template>
  <div class="IngredientList flex">
    <IngredientItem
      v-for="ingredient of list"
      @select="ingredient.selected = !ingredient.selected"
      :key="ingredient.key"
      :itemName="ingredient.name"
      :itemId="ingredient.id"
      :pic="ingredient.pic"
      :selected="ingredient.selected"
    />
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
    const list = await ingredientData()
    this.list = list.map((ingredient) => ({ selected: false, ...ingredient }))
  }
}
</script>

<style></style>
