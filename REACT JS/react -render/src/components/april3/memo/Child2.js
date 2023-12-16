import React from 'react'

 function Child2({name}) {
  console.log("Child 2")
  return (
    <div>
        <h2>Child2</h2>
        <h3>{name}</h3>
        <h3 className='note'>See this file for memo code</h3>
    </div>
  )
}
 export default React.memo(Child2)