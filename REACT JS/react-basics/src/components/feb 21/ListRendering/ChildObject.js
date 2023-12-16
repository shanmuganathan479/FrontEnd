import React from 'react'

function ChildObject({mobile}) {
  return (
    <div>
      <h1>Child object</h1>
      {
      <p>Mobile is{mobile.name} Prize is {mobile.price}</p>
    
      }
    </div>
  )
}

export default ChildObject