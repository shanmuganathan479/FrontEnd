import React from 'react'

const StateImmutablity = () => {
  return (
    <div>
        <h1>StateImmutablity</h1>
        <ol>
            <li>Mutating array,object it wont cause Re-render in UseState,UseEffect</li>
            <li>To Re-render - create a new reference and modify the state and pass the state the setter function </li>  
            <li>Directly Mutating is an easy way to create bug </li>
        </ol>
    </div>
  )
}

export default StateImmutablity