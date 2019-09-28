<template>
  <ul class="IngredientList">
    <li
      v-for="ingredient in list"
      :key="ingredient.id"
      class="IngredientList_item"
      :aria-selected="ingredient.isSelected ? 'true' : 'false'"
      @click="toggleSelection(ingredient)"
    >
      <IngredientItem
        :ingredient="ingredient"
        :is-selected="ingredient.isSelected"
      />
    </li>
  </ul>
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
    this.list = list.map((ingredient) => ({
      ...ingredient,
      isSelected: false,
      pic: `${ingredient.pic}?id=${ingredient.id}`
    }))
  },
  methods: {
    toggleSelection(ingredient) {
      ingredient.isSelected = !ingredient.isSelected
    }
  }
}
</script>

<style lang="scss">
.IngredientList {
  padding: 8px;
  display: flex;
  flex-direction: column;
  &_item {
    &:not(:first-child) {
      margin-top: 8px;
    }
    cursor: pointer;
  }
}
</style>
