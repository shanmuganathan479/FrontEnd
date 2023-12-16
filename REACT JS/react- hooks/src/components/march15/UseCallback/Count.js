import React, { Children } from 'react'

function Count({text,state,}) {
    console.log(`Count component ${text}`)
  return (
    <div>
        <h1>Count</h1>
        <h2> {text}= {state}</h2>
    </div>
  )
}

export default  React.memo(Count)