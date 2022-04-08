import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import TodosReducer ,{TODOS} from './todo.slice'
import CounterReducer,{COUNTER} from './counter.slice'
import logger from 'redux-logger'
export default configureStore({
  reducer:{
    [TODOS]: TodosReducer,
    [COUNTER]:CounterReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  // 配置中间件
  middleware:[...getDefaultMiddleware(),logger]
})