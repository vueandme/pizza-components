<template>
  <select
    class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
  >
    <IngredientDDItem
      v-for="ingredient in list"
      :id="ingredient.id"
      :key="ingredient.id"
      :pic="ingredient.pic"
      :name="ingredient.name"
    />
  </select>
</template>

<script>
import IngredientDDItem from '@/components/IngredientDDItem'
export default {
  props: ['list'],
  components: {
    IngredientDDItem
  }
}
</script>

<style></style>
