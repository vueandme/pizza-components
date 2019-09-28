<template>
  <div class="IngredientDropdown">
    <button
      class="IngredientDropwdown_selected"
      :aria-expanded="showList ? 'true' : 'false'"
      @click="showList = true"
    >
      <IngredientItem v-if="selectedItem" :item="selectedItem"></IngredientItem>
      <div v-else>No ingredient selected</div>
    </button>
    <ul v-show="showList" class="IngredientDropdown_options">
      <li
        v-for="ingredient in ingredients"
        :key="ingredient.id"
        @click="selectIngredient(ingredient)"
      >
        <IngredientItem
          :item="ingredient"
          :is-selected="selectedItem && ingredient.id === selectedItem.id"
          role="option"
          :aria-selected="selectedItem && ingredient.id === selectedItem.id"
        ></IngredientItem>
      </li>
    </ul>
  </div>
</template>

<script>
import IngredientItem from '@/components/IngredientItem'

export default {
  components: {
    IngredientItem
  },
  props: {
    ingredients: { type: Array, required: true }
  },
  data: () => ({
    selectedItem: null,
    showList: false
  }),
  methods: {
    selectIngredient(ingredient) {
      this.selectedItem = ingredient
      this.showList = false
    }
  }
}
</script>

<style lang="scss">
.IngredientDropdown {
  position: relative;
  &__options {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
}
</style>
