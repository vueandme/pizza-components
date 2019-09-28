<template>
  <div class="IngredientItem" :class="{ '-selected': isSelected }">
    <img class="IngredientItem_image" :src="ingredient.pic" />
    <span class="IngredientItem_name">{{ ingredient.name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    ingredient: { required: true, type: Object },
    isSelected: { default: false, type: Boolean }
  }
}
</script>

<style lang="scss">
.IngredientItem {
  display: flex;
  align-items: center;
  &_name {
    font-size: 12px;
    user-select: none;
  }
  &_image {
    width: 50px;
    height: 50px;
    margin-right: 16px;
  }
  &.-selected {
    .IngredientItem_name {
      font-weight: bold;
    }
  }
}
</style>
