import React, { useEffect,useState } from 'react'

const MouseTracker = () => {
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)
    
    useEffect(()=>{
       console.log("UseEffect called")
       window.addEventListener("mousemove",handlePosition)

       return()=>{
        window.removeEventListener("mousemove",handlePosition)
       }
    },[])
    // Onlyonce
   
    const handlePosition=(e)=>{
        console.log("Mouse moved")
       setx(e.clientX)
       sety(e.clientY)
    }

  return (
    <div>
        <h2>MouseTracker</h2>
        <h2>X position = {x}</h2>
        <h2>Y position = {y}</h2>
    </div>
  )
}

export default MouseTracker