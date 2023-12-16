import React from 'react'
import ContextB from './ContextB'
function ContextA() {
  return (
    <div>
      <h1>Normal Traditional context Way</h1>
        <h1>ContextA</h1>
        <ContextB/>
    </div>
  )
}

export default ContextA