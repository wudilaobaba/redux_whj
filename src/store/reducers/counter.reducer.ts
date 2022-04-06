import {CounterState} from '../types/counter'
import {ADD, JIAN} from '../const/counter.const'

const initValue: CounterState = {count: 0}
export default (state = initValue, action: { type: string, payload: number }) => {
  switch (action.type) {
    case ADD:
      return {...state, count: state.count + action.payload}
    case JIAN:
      return {...state, count: state.count - action.payload}
    default:
      return state
  }
}