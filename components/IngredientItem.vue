<template>
  <div class="IngredientItem">
    <span>id: {{ id }}</span>
    <img :src="pic" alt="ingredient" />
    <span>{{ name }}</span>
    <span v-if="isSelected">selected</span>
    <span v-else></span>
  </div>
</template>

<script>
export default {
  props: {
    initialId: {
      type: Number,
      default: 0
    },
    initialName: {
      type: String,
      default: ''
    },
    initialPic: {
      type: String,
      default: ''
    },
    initialIsSelected: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      id: this.initialId,
      name: this.initialName,
      pic: this.initialPic,
      isSelected: this.initialIsSelected
    }
  }
}
</script>

<style scoped></style>
