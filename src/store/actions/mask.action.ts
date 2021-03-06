import {SHOW, HIDE} from '../const/mask.const'
import {DispatchFun} from '../types/common'
import {Dispatch} from "redux";

export const showMask: DispatchFun<boolean> = (payload) => ({type: SHOW, payload})
export const hideMask: DispatchFun<boolean> = (payload) => ({type: HIDE, payload})

export const show_async = (data: boolean)=>(dispatch: Dispatch)=>{
  setTimeout(()=>{
    dispatch(showMask(data))
  },2000)
}