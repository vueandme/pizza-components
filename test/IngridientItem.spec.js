import { shallowMount } from '@vue/test-utils'
import IngridientItem from '@/components/IngredientItem'

describe('IngridientItem', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(IngridientItem)
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
