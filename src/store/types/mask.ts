import {DispatchFun} from './common'
import {Dispatch} from 'redux'

export type MaskState = {
  show: boolean,
}
type MaskDispatch = {
  showMask: DispatchFun<boolean>,
  hideMask: DispatchFun<boolean>,
  show_async: (data: boolean) => (dispatch: Dispatch) => void
}

export type MaskProps = MaskState & MaskDispatch

// 键名要与store中的reducer /Users/pc/Downloads/redux_whj/src/store/reducers/index.ts保持一致
export type MaskReducer = { maskReducer: MaskProps }