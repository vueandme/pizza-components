<template>
  <div>
    {{ item.name }}
    <img :src="item.pic" alt="picture goes here" />
  </div>
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
