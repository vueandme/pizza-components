<template>
  <div
    :is="tag"
    :id="itemId"
    :class="{ IngredientItem: true, selected }"
    @click="select"
  >
    <template v-if="!tagIsOption()">
      <h1>{{ itemName }}</h1>
    </template>
    <template v-else>
      {{ itemName }}
    </template>

    <img v-if="pic" :src="pic" />
  </div>
</template>

<script>
export default {
  props: {
    itemId: {
      type: Number,
      default: 0
    },
    itemName: {
      type: String,
      required: true
    },
    pic: {
      type: String,
      required: false,
      default: null
    },
    tag: {
      type: String,
      default: 'div'
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    select() {
      this.$emit('select', { id: this.itemId, selected: this.selected })
    },

    tagIsOption() {
      return this.tag === 'option'
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
