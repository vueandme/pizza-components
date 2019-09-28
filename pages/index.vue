<template>
  <div class="container">
    <IngredientDropdown />
    <IngredientList />
  </div>
</template>

<script>
import IngredientList from '@/components/IngredientList'
import IngredientDropdown from '@/components/IngredientDropdown'

export default {
  components: {
    IngredientList,
    IngredientDropdown
  }
}
</script>
<style></style>
