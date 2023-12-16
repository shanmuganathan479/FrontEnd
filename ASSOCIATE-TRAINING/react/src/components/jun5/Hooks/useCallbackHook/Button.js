import React from 'react'

const Button = ({children,event}) => {
  console.log(` Button component ${children}`)
  return (
    <div>
      <button onClick={event}>{children}</button>
    </div>
  )
}

export default React.memo(Button)