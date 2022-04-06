import React from "react";
import {connect} from 'react-redux'
import {bindActionCreators, Dispatch} from 'redux'
import {CounterState, Counter} from '../../store/types/counter'
import * as counter from '../../store/actions/counter.action'

export const Home = (props: Counter) => {
  return (
    <div>
      <button onClick={()=>props.add(3)}>+</button>
      {props.count}
      <button onClick={()=>props.jian(3)}>-</button>
    </div>
  )
}
const mapStateToProps = (state: CounterState): CounterState => ({
  count: state.count,
})


// 返回一个对象
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(counter, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Home)