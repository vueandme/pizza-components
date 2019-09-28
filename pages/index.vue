<template>
  <div class="container">
    <IngridientDropdown />
    <IngredientList />
  </div>
</template>

<script>
import IngridientDropdown from '@/components/IngridientDropdown'
import IngredientList from '@/components/IngredientList'

export default {
  components: {
    IngridientDropdown,
    IngredientList
  }
}
</script>
<style></style>
