import React from 'react'

function Child(props) {
  return (
    <div>
        <button onClick={()=>props.parentArgs("this is Child component")}>I am a child component</button>
    </div>
  )
}

export default Child