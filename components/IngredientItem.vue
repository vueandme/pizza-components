<template>
  <div class="IngredientItem" :class="isSelected ? 'selected' : null">
    <img :src="item.pic" />
    <h1>{{ item.name }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.IngredientItem {
  cursor: pointer;
  margin-bottom: 0.5rem;
  display: flex;
}
h1 {
  font-size: 3rem;
}
.selected {
  border-style: solid;
  border-color: blue;
  border-width: 0.2rem;
}
img {
  width: 50px;
  height: 50px;
  margin-left: 12px;
}
</style>
