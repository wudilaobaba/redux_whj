import {DispatchFun} from './common'

export type CounterState = {
  count: number
}
type CounterDispatch = {
  add: DispatchFun<number>,
  jian: DispatchFun<number>,
}

export type CounterProps = CounterState & CounterDispatch

// 键名要与store中的reducer /Users/pc/Downloads/redux_whj/src/store/reducers/index.ts保持一致
export type CounterReducer = {counterReducer: CounterProps}