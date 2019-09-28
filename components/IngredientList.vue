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

export default {
  components: {
    IngredientItem
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>

<style>
.IngredientList {
  margin: 1rem;
}
</style>
