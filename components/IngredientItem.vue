<template>
  <div
    :is="tag"
    :id="id"
    :class="{ '-selected': selected }"
    class="IngredientItem"
  >
    <h1>{{ name }}</h1>
    <img :src="picture" :alt="name" />

    <div class="form-item">
      <input
        :id="`ingredient-select-${id}`"
        name="ingredient-selected"
        type="checkbox"
        @change="setSelected"
      />

      <label :for="`ingredient-select-${id}`">Select ingredient</label>
    </div>
  </div>
</template>

<script>
import itemMixin from '@/mixins/ItemMixin.js'
export default {
  mixins: [itemMixin],
  computed: {
    picture() {
      return `${this.pic}?_="${Date.now() + Math.random()}"`
    }
  }
}
</script>

<style scoped>
.IngredientItem {
  width: 300px;
  margin: 0 0 2rem 0;
}

h1 {
  font-weight: bold;
  font-size: 2rem;
}

img {
  display: block;
  width: 100%;
  height: 100%;
}

.-selected {
  outline: 1px solid #ccc;
  background: #f0f0f0;
}
</style>
