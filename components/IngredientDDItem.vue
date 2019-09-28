<template>
  <option :value="id">{{ name }}</option>
</template>

<script>
import itemMixin from '@/mixins/ItemMixin.js'
export default {
  mixins: [itemMixin]
}
</script>

<style></style>
