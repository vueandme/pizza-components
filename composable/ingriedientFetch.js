import { reactive, computed, ref } from '@vue/composition-api'
import { ingredientData } from '@/api/data'

export default function loadList() {
  const loading = ref(true)
  const state = reactive({
    list: []
  })
  const sorted = computed(() => [...state.list].reverse())

  const fetch = async () => {
    loading.value = true
    state.list = await ingredientData(1000)
    loading.value = false
  }
  return {
    loading,
    sorted,
    fetch
  }
}
