import React from 'react'

const Display = ({text,exp}) => {
    console.log(`Display component - ${text}`)
  return (
    <div>
        <h2>{text} = {exp}</h2>
    </div>
  )
}

export default React.memo(Display)