import {DispatchFun} from './common'
export type CounterState = {
  count: number,
}
export type CounterDispatch = {
  add: DispatchFun<number>,
  jian: DispatchFun<number>,
}

export type Counter = CounterState & CounterDispatch