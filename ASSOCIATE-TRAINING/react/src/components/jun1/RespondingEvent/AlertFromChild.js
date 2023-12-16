import React from 'react'

const ChildEvent = ({handleAlert}) => {
  return (
    <div>
        <h2>ChildEvent</h2>
        <button onClick={handleAlert}>I am from child component</button>
    </div>
  )
}

export default ChildEvent