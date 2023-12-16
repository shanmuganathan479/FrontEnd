import React, { useState } from 'react'

const EventHandling = () => {

    const [mouseOver, setmouseOver] = useState(false)

    const handleAlert=()=>{
        alert("Hiiiiiiiii")
    }

    const handleMouseOver=()=>{
      setmouseOver(prev => !prev)
    }

    const handlekeyPress=()=>{
       alert("You pressed key")
    }

  return (
    <div>
        <h1>EventHandling</h1>
        <p> Event handlers are function functuons it will be executed whenever we inerract</p>
         
         <h2>Event handling with functional component</h2>

         <h3>Click event</h3>
        <button onClick={handleAlert}>Click me</button>
                {/* camelCase */}
                {/* event handlers are function */}
        
      <h3>Mouse event</h3>

      <p style={{  fontSize: mouseOver && "50px"}} onMouseOver={handleMouseOver}>Mouse over me</p>


      <h3 >Keyboard event</h3>

      <input type='text ' placeholder='Type here......' onKeyDown={handlekeyPress}/>
        
    </div>
  )
}

export default EventHandling

