<template>
  <select class="IngredientList">
    <option v-for="item in list" :key="item.id">
      <IngredientItem
        :initialId="item.id"
        :initialName="item.name"
        :initialPic="item.pic"
        :initialIsSelected="false"
      ></IngredientItem>
    </option>
  </select>
</template>

<script>
import IngredientItem from '@/components/IngredientItem'
import { ingredientData } from '@/api/data'

export default {
  components: {
    IngredientItem
  },
  data() {
    return {
      list: []
    }
  },
  async mounted() {
    this.list = await ingredientData()
  }
}
</script>

<style></style>
