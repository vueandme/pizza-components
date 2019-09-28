<template>
  <div
    class="IngredientItem"
    :class="isSelected ? 'selected' : null"
    @click="selectItem"
  >
    <h1>{{ item.name }}</h1>
    <img :src="item.pic" />
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      isSelected: false
    }
  },

  methods: {
    selectItem() {
      this.isSelected = true
    }
  }
}
</script>

<style scoped>
.IngredientItem {
  cursor: pointer;
  margin-bottom: 0.5rem;
}
h1 {
  font-size: 3rem;
}
.selected {
  border-style: solid;
  border-color: blue;
  border-width: 0.2rem;
}
</style>
