import React from 'react'

function Button({event,children}) {
    console.log(`Button component ${children}`)
  return (
    <div>
        <h1>Button</h1>
        <button onClick={event}>{children}</button>
    </div>
  )
}

export default React.memo(Button)