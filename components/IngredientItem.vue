<template>
  <div :class="{ IngredientItem: true, selected }" @click="select">
    <h1>{{ itemName }}</h1>
    <img :src="pic" />
  </div>
</template>

<script>
export default {
  props: ['itemName', 'pic', 'itemId', 'selected'],
  methods: {
    select() {
      this.$emit('select', { id: this.itemId, selected: this.selected })
    }
  }
}
</script>

<style>
.IngredientItem {
  border: 2px solid #fff;
}
.selected {
  background-color: #67cdcc;
  border: 2px solid #67cdcc;
}
</style>
