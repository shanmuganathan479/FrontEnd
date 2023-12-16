import React, { useState } from 'react'

const Counter = () => {

   const [count,setCount]= useState(0)

   const handleIncrement=()=>{
     setCount(prev=>prev+1)
   }
   const handleDecrement=()=>{
    setCount(prev=>prev - 1)
  }
  const handleReset=()=>{
    setCount(0)
  }

  // const handleIncrement10=()=>{
  //    for(let i=0;i<=10;i++){
  //       setCount(count+1)
  //    }
  // }

  const handleIncrement10=()=>{
    for(let i=0;i<=10;i++){
       setCount(prev=>prev+1)
          }
 }
  return (
    <div>
        <h1>React - Hooks</h1>
        <h2>UseState Hook</h2>
        <h2>Counter = {count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement10}>Increment 10</button>

    </div>
  )
}

export default Counter