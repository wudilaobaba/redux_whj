// createEntityAdapter创建实体适配器
import {createSlice, createAsyncThunk, createEntityAdapter, createSelector} from '@reduxjs/toolkit'

import axios from "axios";

const todosAdapter = createEntityAdapter()

export const TODOS = 'todos'
// 异步
// 第二个参数一般返回一个Promise对象
export const loadTodos = createAsyncThunk('todos/loadTodos', (payload: string) => axios.get(payload).then(data => data.data))

export type DataType = { title: string, id: number }
const {reducer: TodosReducer, actions} = createSlice({
  name: TODOS,
  initialState: todosAdapter.getInitialState,// 初始化数据
  // 接受同步
  reducers: {
    addTodo: {
      reducer: todosAdapter.addOne,
      // 预处理
      prepare: todo => ({payload: {id: Math.random(), ...todo}})
    }
  },
  // 接受异步actions
  extraReducers: {
    // 监听成功状态
    [(loadTodos as any).fulfilled]: todosAdapter.addMany,
    // 监听等待状态
    [(loadTodos as any).pending]: (state, action) => {
      console.log('pending...')
      return state
    }
  }
});
/**
 * selectId: IdSelector<T>
 sortComparer: false | Comparer<T>
 getInitialState(): EntityState<T>
 getInitialState<S extends object>(state: S): EntityState<T> & S
 getSelectors(): EntitySelectors<T, EntityState<T>>
 getSelectors<V>(
 selectState: (state: V) => EntityState<T>
 ): EntitySelectors<T, V>
 */
const {selectAll} = todosAdapter.getSelectors()


export const selectTodos = createSelector((state: any)=>state[TODOS],selectAll)
export const {addTodo} = actions
export default TodosReducer
