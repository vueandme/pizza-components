<template>
  <div class="IngredientItem">
    <span>id: {{ id }}</span>
    <img :src="pic" alt="ingredient" />
    <span>{{ name }}</span>
    <span v-if="isSelected">✅</span>
    <span v-else></span>
    <button @click="selectItem" class="select-btn">Select</button>
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
  },

  methods: {
    selectItem() {
      if (this.isSelected) {
        this.isSelected = false
      } else {
        this.isSelected = true
      }
    }
  }
}
</script>

<style scoped>
.select-btn {
  margin: 1px red solid;
}
</style>
