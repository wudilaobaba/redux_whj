import {ADD, JIAN} from '../const/counter.const'
import {DispatchFun} from '../types/common'
import {Dispatch} from "redux";

export const add: DispatchFun<number> = (payload) => ({type: ADD, payload})
export const jian: DispatchFun<number> = (payload) => ({type: JIAN, payload})

export const add_async = (data: number) => (dispatch: Dispatch) => {
  setTimeout(()=>{
    dispatch(add(data))
  },2000)
}