import React from 'react'

const ChildObject = ({mobile}) => {
  return (
    <div>
        <h2>ChildObject</h2>
        <li>Mobile is {mobile.name} Mobile prize is {mobile.price}</li>
    </div>
  )
}

export default ChildObject