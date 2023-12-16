import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { buyCake } from '../../redux'

const HooksCakeContainer = () => {

  const numOfCake = useSelector(state=> state.cake.numOfCake)
  const dispatch = useDispatch();
  return (
    <div>
        <h1>HooksCakeContainer (useSelector+useDispatch)</h1>
        <h2>useSelector = For accessing state in components</h2>
        <h2>useDispatch = For dispatching action in component</h2>

        <h2>Number of cakes = {numOfCake}</h2>

        <button onClick={()=>dispatch(buyCake())}>BUY CAKE</button>
    </div>
  )
}

export default HooksCakeContainer