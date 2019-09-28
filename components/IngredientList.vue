<template>
  <div :is="tag" class="IngredientList">
    <IngredientItem
      v-for="ingredient in list"
      :id="ingredient.id"
      :key="ingredient.id"
      :pic="ingredient.pic"
      :name="ingredient.name"
      tag="li"
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
  props: {
    tag: {
      type: String,
      default: 'div'
    }
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

<style>
.IngredientList {
  margin: 1rem;
}
</style>
