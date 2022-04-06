import {ADD, JIAN} from '../const/counter.const'
import {DispatchFun} from '../types/common'

export const add: DispatchFun<number> = (payload: number) => ({type: ADD, payload})
export const jian: DispatchFun<number> = (payload:number) => ({type: JIAN, payload})