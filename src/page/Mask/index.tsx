import React from "react";
import {connect} from 'react-redux'
import {bindActionCreators, Dispatch} from 'redux'
import './style.css'
import {MaskState, MaskProps, MaskReducer} from "../../store/types/mask";
import * as mask1 from "../../store/actions/mask.action";

const Mask = (props: MaskProps) => {
  return (
    <>
      <div className='mask' style={{opacity: props.show ? 1 : 0}}></div>
      <button onClick={() => props.hideMask(!props.show)}>显示/隐藏</button>
    </>
  )
}
const mapStateToProps = (state: MaskReducer): MaskState => ({
  show: state.maskReducer.show
})
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(mask1, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Mask)