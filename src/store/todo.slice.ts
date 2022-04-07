import {createSlice} from '@reduxjs/toolkit'

export const TODOS = 'todos'
export type DataType = { title: string, id: number }
const {reducer: TodosReducer, actions} = createSlice({
  name: TODOS,
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state: DataType[], action: { payload: DataType, type: string }) => {
        state.push(action.payload)
      },
      // 预处理
      prepare: todo => ({payload: {id: Math.random(), ...todo}})
    }
  }
});
export const {addTodo} = actions
export default TodosReducer
