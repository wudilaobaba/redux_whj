import {combineReducers} from 'redux'
import CounterReducer from './counter.reducer'
import MaskReducer from './mask.reducer'

// 项目中所有的state都是这样的了
export default combineReducers({
  counterReducer: CounterReducer,
  maskReducer: MaskReducer
})