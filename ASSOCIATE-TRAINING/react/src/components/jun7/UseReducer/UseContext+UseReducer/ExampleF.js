import React, { useContext } from 'react'
import { Context } from './App2'

const ExampleF = () => {
  const countContext =useContext(Context)
   console.log(countContext.count,"shan")
  //  console.log(countContext.dispatch,"shan")

  return (
    <div>
      <h2>ExampleF</h2>
      <h2>{countContext.count.firstCounter}</h2>
      {/* {countContext.count.firstCounter} */}
      <button onClick={()=>countContext.dispatch({type: "increment",value: 1})}>Increment</button>
      <button onClick={()=>countContext.dispatch({type: "decrement",value: 1})}>Decrement</button>
      <button onClick={()=>countContext.dispatch({type: "reset"})}>Reset</button>

    </div>
  )
}

export default ExampleF