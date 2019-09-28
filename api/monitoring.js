import { timedAnswer } from './utils.js'

export const maybeIsGettingThat = () => {
  return timedAnswer('We have it')
}
export const heIsGettingIt = () => {
  return timedAnswer('Remove it from the shelf!')
}
export const nopeHeIsNot = () => {
  return timedAnswer('Put it back! he changed his/her mind')
}
