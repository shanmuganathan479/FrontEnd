import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {order,restock} from "./cakeSlice"

const CakeView = () => {
 const cakeCount = useSelector((state)=>state.cake.numOfCake)
 const dispatch = useDispatch()
  return (
    <div>
        <h2>Cake store {cakeCount}</h2>
        <h3>Number of cakes</h3>
        <button onClick={()=>dispatch(order())}>order</button>
        <button onClick={()=>dispatch(restock(10))}>restock</button>
    </div>
  )
}

export default CakeView