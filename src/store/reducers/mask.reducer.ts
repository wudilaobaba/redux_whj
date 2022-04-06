import {MaskState} from '../types/mask'
import {SHOW,HIDE} from '../const/mask.const'

const initValue: MaskState = {show: false}
export default (state = initValue, action: { type: string, payload: boolean }) => {
  switch (action.type) {
    case SHOW:
      return {...state, show: action.payload}
    case HIDE:
      return {...state, show: action.payload}
    default:
      return state
  }
}