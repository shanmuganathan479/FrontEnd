import React from 'react'
import { useState } from 'react'

function CounterStateHook() {

   const [count,setCount] = useState(0);
       // Destructring               intial Value
       // [state,Method]
       // state is 0 
       // Method is capable of changing value

       const handleClick=()=>{
           setCount(count + 10)
       }
  return (
    <div>
        <h1>Counter with StateHook</h1>
        <button onClick={handleClick}>Count {count}</button>
    </div>
  )
}

export default CounterStateHook