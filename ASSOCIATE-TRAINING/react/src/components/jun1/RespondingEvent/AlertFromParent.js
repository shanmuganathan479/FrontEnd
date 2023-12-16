import React from 'react'
import ChildEvent from './AlertFromChild'

const ParentEvent = () => {

    const handleAlert=()=>{
        alert("Hey  I am from Parent")
    }
  return (
    <div>
        <h2>ParentEvent</h2>

        <h2>Child component</h2>
    </div>
  )
}

export default ParentEvent