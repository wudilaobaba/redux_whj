import {configureStore} from '@reduxjs/toolkit'
import TodosReducer ,{TODOS} from './todo.slice'
import CounterReducer,{COUNTER} from './counter.slice'
export default configureStore({
  reducer:{
    [TODOS]: TodosReducer,
    [COUNTER]:CounterReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})