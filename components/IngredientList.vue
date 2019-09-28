<template>
  <div class="IngredientList">
    <IngredientItem
      v-for="item in list"
      :key="item.id"
      :initialId="item.id"
      :initialName="item.name"
      :initialPic="item.pic"
      :initialIsSelected="false"
    ></IngredientItem>
  </div>
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
