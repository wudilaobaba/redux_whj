import React from "react";
import {connect} from 'react-redux'
import {bindActionCreators, Dispatch} from 'redux'
import './style.css'
import {MaskState, MaskProps, MaskReducer} from "../../store/types/mask";
import * as mask from "../../store/actions/mask.action";

const Mask = (props: MaskProps) => {
  return (
    <>
      <button onClick={()=>props.show_async(true)}>延迟显示</button>
      <div className='mask' style={{opacity: props.show ? 1 : 0}}></div>
      <button onClick={() => props.show ? props.hideMask(false) : props.showMask(true)}>显示/隐藏</button>
    </>
  )
}
const mapStateToProps = (state: MaskReducer): MaskState => ({
  show: state.maskReducer.show
})
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(mask, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Mask)