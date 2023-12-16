import React,{useEffect, useState} from 'react'

const Timer2 = () => {
    const [count, setcount] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
           setcount(prev=>prev+1)
        },1000)

        return()=>{
            clearInterval(interval)
        }
    },[count])
  return (
    <div>
        <h2>Timer = {count}</h2>
    </div>
  )
}

export default Timer2