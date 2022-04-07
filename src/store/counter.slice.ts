import {createSlice} from '@reduxjs/toolkit'

export const COUNTER = 'counter'
export type CounterType = { count: number }
const {reducer: CounterReducer, actions} = createSlice({
  name: COUNTER,
  initialState: {count: 0},
  reducers: {
    add: (state: CounterType, action: { payload: number, type: string }) => {
      state.count = state.count + action.payload
    },
    jian: (state: CounterType, action: { payload: number, type: string }) => {
      state.count = state.count - action.payload
    }
  }
});
export const {add, jian} = actions
export default CounterReducer
