<template>
  <select class="IngredientDropdown" @change="onChange($event)">
    <IngredientItem
      v-for="ingredient of list"
      :key="ingredient.key"
      :item-name="ingredient.name"
      :item-id="ingredient.id"
      :selected="ingredient.selected"
      tag="option"
      @select="ingredient.selected = !ingredient.selected"
    />
  </select>
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
  },
  methods: {
    onChange(event) {
      // unselect all items
      this.list.map((ingredient) => {
        ingredient.selected = false
        return ingredient
      })

      // select correct item
      this.list.find(({ name }) => name === event.target.value).selected = true
    }
  }
}
</script>

<style></style>
