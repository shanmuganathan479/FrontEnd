import React from 'react'

function DestructringFuncC({name,age}) { //1st way

    // const {name,age} = props 
    // 2nd way
    // if u use props keyword go with this methods
  return (
    <div>
        <h1>Destructring props in functional component</h1>
        
        <h1>Hii this is shan{name}, I am {age} 22 years old</h1>
    </div>
  )
}

export default DestructringFuncC