import React, { useEffect, useRef, useState } from 'react'

export const Timer = () => {

    const [time,setTime] = useState(0)
    const refTimer = useRef(null)

    useEffect(()=>{
      refTimer.inputTimer=setInterval(()=>{
        setTime(prev=>prev+1)
      },1000)

      // return()=>{
      //   clearInterval(refTimer.inputTimer)
      // }
    },[])
    
    const handleClick=()=>{
        clearInterval(refTimer.inputTimer)
    }

  return (
    <div>
        <h1>UseRef</h1>
        <h2>Stop Timer-{time}</h2>
        <button onClick={handleClick}>Stop</button>
    </div>
  )
}
