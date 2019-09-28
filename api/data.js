import { timedAnswer } from './utils.js'

export const ingredientData = (time) => {
  return timedAnswer(
    [
      { name: 'tomato', id: 1, pic: 'http://lorempixel.com/400/400/food' },
      { name: 'mozzarella', id: 2, pic: 'http://lorempixel.com/400/400/food' },
      { name: 'salami', id: 3, pic: 'http://lorempixel.com/400/400/food' },
      { name: 'paprika', id: 4, pic: 'http://lorempixel.com/400/400/food' }
    ],
    time
  )
}
