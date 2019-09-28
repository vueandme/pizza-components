<template>
  <select>
    <option
      v-for="ingredient in ingredients"
      :key="ingredient.id"
      :value="ingredient.name"
    >
      {{ ingredient.name }}
    </option>
  </select>
</template>

<script>
import { ingredientData } from '@/api/data'

export default {
  data() {
    return {
      ingredients: []
    }
  },
  async mounted() {
    this.ingredients.push(...(await ingredientData()))
  }
}
</script>
