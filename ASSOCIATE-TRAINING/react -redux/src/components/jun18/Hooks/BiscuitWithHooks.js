import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyBiscuit } from '../../redux/biscuit/BiscuitAction'

const BiscuitWithHooks = () => {

 const biscuitPrice = useSelector(state => state.biscuit.priceOfMarioBiscuit)
 const dispatch =useDispatch()
  return (
    <div>
        <h1>BiscuitWithHooks Your Bill is -{biscuitPrice}</h1>
        <button onClick={()=>dispatch(buyBiscuit())}>Buy Mario biscuit</button>
    </div>
  )
}

export default BiscuitWithHooks