<template>
  <option :value="item.name">
    {{ item.name }}
    <img :src="item.pic" alt="picture goes here" />
  </option>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
<style></style>
