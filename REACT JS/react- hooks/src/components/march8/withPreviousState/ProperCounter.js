import React,{useState} from 'react'

export const ProperCounter = () => {

    const [count,setCount] = useState(0)

    const handleIncrement =()=>{
       setCount(prev=> prev+1)
    }

    const handleDecrement =()=>{
        setCount(prev=> prev-1)
    }
    const handleReset =()=>{
         setCount(count == 0)
    }

    const handleIncrement5 =()=>{
        for(let s=0; s <5;s++){
        setCount(prev=> prev+1)
        // This is perfect useCase change this without previous state
        }
     }

  return (
    <div>
        <h1>ProperCounter {count}</h1>
        <button onClick={handleIncrement} >Increment</button>
        <button onClick={handleDecrement} >Decrement</button>
        <button onClick={handleReset} >Reset</button>
        <button onClick={handleIncrement5} >Increment5</button>

    </div>
  )
}
