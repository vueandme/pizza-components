<template>
  <div class="IngredientList">
    <IngredientItem
      v-for="(item, index) in list"
      :key="index"
      :item="item"
      :is-selected="item.isSelected"
      @click="toggleItem(item)"
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
    this.list = await ingredientData()
  },
  methods: {
    toggleItem(item) {
      item.isSelected = !item.isSelected
    }
  }
}
</script>

<style></style>
