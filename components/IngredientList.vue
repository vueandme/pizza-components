<template>
  <div class="IngredientList">
    <IngredientItem
      v-for="item in list"
      :key="item.id"
      :item="item"
      :class="selected[item.id] ? 'grey' : ''"
      @click.native="selectAction(item.id)"
    />
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
      list: [],
      selected: {}
    }
  },
  async mounted() {
    this.list = await ingredientData()
  },
  methods: {
    selectAction(id) {
      this.selected = {
        ...this.selected,
        [id]: !this.selected[id]
      }
    }
  }
}
</script>

<style>
.grey {
  background-color: grey;
}
</style>
