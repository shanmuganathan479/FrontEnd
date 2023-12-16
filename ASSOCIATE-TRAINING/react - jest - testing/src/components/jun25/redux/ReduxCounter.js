import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleDecrement,handleIncrement } from './CounterAction'
const ReduxCounter = () => {
 const count =  useSelector(state =>state.count)
 const dispatch = useDispatch()
  return (
    <div>
        <h1>ReduxCounter</h1>
        <h1 data-testid="countValue">{count}</h1>
        <button onClick={()=>dispatch(handleIncrement())}>Increment</button>
        <button onClick={()=>dispatch(handleDecrement())}>Decrement</button>
    </div>
  )
}

export default ReduxCounter