import React from 'react'

function EventHandlingFun() {

  function handleClick(){
     console.log("Button clicked")

  }
  return (
    <div>
      <h1>Event handling with functional component</h1>
      <button onClick={handleClick}>Functional component</button> 
      {/* event handlers are function  */}

      {/* <button onClick={handleClick()}>Click me da</button> */}
      {/* This is function call wont work */}
    </div>
  )
}

export default EventHandlingFun