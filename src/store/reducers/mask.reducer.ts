import {MaskState} from '../types/mask'

const initValue: MaskState = {show: false}
export default (state = initValue, action: { type: string, payload: number }) => {
  return {...state, show: action.payload}
}