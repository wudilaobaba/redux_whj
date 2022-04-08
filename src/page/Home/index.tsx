import React,{useEffect} from "react";
import {addTodo, loadTodos, selectTodos} from '../../store/todo.slice'
import {add,jian, COUNTER, CounterType} from '../../store/counter.slice'
import {useSelector,useDispatch} from 'react-redux'

export const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadTodos('https://api.github.com/orgs/lagoufed/repos'))
  },[])

  const todos = useSelector(selectTodos)
  const num = useSelector(state => (state as any)[COUNTER])
  return (
    <div>
      <button onClick={()=>dispatch(addTodo({title:"测试"}))}>增加todo</button>
      {
        todos.map((item:any,index)=><h1 key={index}>{item.id}</h1>)
      }
      <br/>
      <button onClick={()=>dispatch(add(3))}>+</button>
      <span>{num.count}</span>
      <button onClick={()=>dispatch(jian(3))}>-</button>

    </div>
  )
}
export default Home