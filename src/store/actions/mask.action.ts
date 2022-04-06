import {SHOW, HIDE} from '../const/mask.const'
import {DispatchFun} from '../types/common'

export const showMask: DispatchFun<boolean> = (payload) => ({type: SHOW, payload})
export const hideMask: DispatchFun<boolean> = (payload) => ({type: HIDE, payload})